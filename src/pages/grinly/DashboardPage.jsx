import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle, XCircle, Clock, Loader2, CalendarDays, Users,
  DollarSign, TrendingUp, LayoutDashboard,
} from 'lucide-react';
import GrinlyLayout from '../../components/grinly/GrinlyLayout';
import { useGrinlyAuth } from '../../hooks/grinly/useGrinlyAuth';
import { useDashboardClinic, useDashboardBookings, useUpdateBookingStatus } from '../../hooks/grinly/useDashboard';

const G = '#06B6D4';

const STATUS_LABELS = {
  pending:   { label: 'Pending',   color: '#f59e0b' },
  confirmed: { label: 'Confirmed', color: G },
  completed: { label: 'Arrived',   color: '#22c55e' },
  no_show:   { label: 'No-show',   color: '#ef4444' },
  cancelled: { label: 'Cancelled', color: '#6b7280' },
};

const formatSlotTime = (isoString) => {
  if (!isoString) return '—';
  const d = new Date(isoString);
  return d.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric' })
    + ' · ' + d.toLocaleTimeString('en-CA', { hour: 'numeric', minute: '2-digit', hour12: true });
};

const BookingRow = ({ booking, onMarkArrived, onMarkNoShow, isUpdating }) => {
  const patient = booking.grinly_patients;
  const slot = booking.grinly_time_slots;
  const statusInfo = STATUS_LABELS[booking.status] || STATUS_LABELS.pending;
  const canAct = booking.status === 'pending' || booking.status === 'confirmed';

  return (
    <div className="card-dark p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-heading font-semibold text-white text-sm">
            {patient?.first_name} {patient?.last_name}
          </span>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{ background: `${statusInfo.color}15`, color: statusInfo.color }}>
            {statusInfo.label}
          </span>
        </div>
        <p className="text-xs text-gray-500">{patient?.email}</p>
        {patient?.phone && <p className="text-xs text-gray-600">{patient.phone}</p>}
        {slot?.starts_at && (
          <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
            <Clock className="w-3 h-3" style={{ color: G }} />
            {formatSlotTime(slot.starts_at)}
            {slot.duration_minutes && <span className="text-gray-600">· {slot.duration_minutes}min</span>}
          </p>
        )}
        {booking.notes && (
          <p className="text-xs text-gray-600 mt-1 italic">"{booking.notes}"</p>
        )}
      </div>

      {canAct && (
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onMarkArrived(booking.id)}
            disabled={isUpdating}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all disabled:opacity-50"
            style={{ background: '#22c55e20', color: '#22c55e', border: '1px solid #22c55e30' }}>
            <CheckCircle className="w-3.5 h-3.5" />
            Arrived
          </button>
          <button
            onClick={() => onMarkNoShow(booking.id)}
            disabled={isUpdating}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all disabled:opacity-50"
            style={{ background: '#ef444415', color: '#ef4444', border: '1px solid #ef444430' }}>
            <XCircle className="w-3.5 h-3.5" />
            No-show
          </button>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, sub }) => (
  <div className="card-dark p-6" style={{ borderTop: `2px solid ${G}30` }}>
    <div className="flex items-start justify-between mb-3">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: `${G}15`, border: `1px solid ${G}25` }}>
        <Icon className="w-4 h-4" style={{ color: G }} />
      </div>
    </div>
    <div className="text-2xl font-heading font-bold text-white mb-0.5">{value}</div>
    <div className="text-xs text-gray-500">{label}</div>
    {sub && <div className="text-xs mt-1" style={{ color: G }}>{sub}</div>}
  </div>
);

const DashboardPage = () => {
  const navigate = useNavigate();
  const { session, loading: authLoading } = useGrinlyAuth();

  const { data: clinic, isLoading: clinicLoading } = useDashboardClinic(session?.user?.id);
  const { data: bookings, isLoading: bookingsLoading } = useDashboardBookings(clinic?.id);
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateBookingStatus();

  if (authLoading || clinicLoading) {
    return (
      <GrinlyLayout>
        <div className="flex items-center justify-center py-32 gap-3 text-gray-500">
          <Loader2 className="w-5 h-5 animate-spin" style={{ color: G }} />
          <span className="text-sm">Loading dashboard…</span>
        </div>
      </GrinlyLayout>
    );
  }

  if (!session) {
    navigate('/grinly/auth', { replace: true });
    return null;
  }

  const todayStr = new Date().toDateString();
  const todayBookings = bookings?.filter((b) => {
    const slotDate = b.time_slots?.starts_at ? new Date(b.time_slots.starts_at).toDateString() : null;
    return slotDate === todayStr;
  }) ?? [];
  const upcomingBookings = bookings?.filter((b) => {
    const slotDate = b.time_slots?.starts_at ? new Date(b.time_slots.starts_at).toDateString() : null;
    return slotDate !== todayStr;
  }) ?? [];

  const handleMarkArrived = (id) => updateStatus({ bookingId: id, status: 'completed' });
  const handleMarkNoShow  = (id) => updateStatus({ bookingId: id, status: 'no_show' });

  return (
    <GrinlyLayout>
      <Helmet>
        <title>{clinic?.name ?? 'Dashboard'} — Grinly</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <LayoutDashboard className="w-4 h-4" style={{ color: G }} />
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: G }}>Clinic Dashboard</span>
            </div>
            <h1 className="text-2xl font-heading font-bold text-white">{clinic?.name ?? 'Your Clinic'}</h1>
            <p className="text-gray-500 text-sm mt-0.5">{clinic?.address}, {clinic?.city}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-600">Plan</p>
            <p className="text-sm font-mono" style={{ color: G }}>
              {clinic?.plan_track === 'A' ? 'Track A (Revenue Share)' : 'Track B ($199 flat)'}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard icon={CalendarDays} label="Today's bookings" value={todayBookings.length} />
          <StatCard icon={Users}       label="Upcoming bookings" value={upcomingBookings.length} />
          <StatCard icon={DollarSign}  label="Fee per arrival"
            value={clinic?.plan_track === 'A' ? '40%' : '$199'}
            sub="charged on confirmation" />
          <StatCard icon={TrendingUp}  label="Total bookings" value={bookings?.length ?? 0} />
        </div>

        {bookingsLoading ? (
          <div className="flex items-center gap-3 text-gray-500 py-10">
            <Loader2 className="w-4 h-4 animate-spin" style={{ color: G }} />
            <span className="text-sm">Loading bookings…</span>
          </div>
        ) : (
          <>
            {/* Today */}
            <section className="mb-10">
              <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">Today</h2>
              {todayBookings.length === 0 ? (
                <div className="card-dark p-8 text-center">
                  <CalendarDays className="w-7 h-7 mx-auto mb-2 opacity-20" style={{ color: G }} />
                  <p className="text-gray-500 text-sm">No appointments today.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {todayBookings.map((b) => (
                    <BookingRow
                      key={b.id}
                      booking={b}
                      onMarkArrived={handleMarkArrived}
                      onMarkNoShow={handleMarkNoShow}
                      isUpdating={isUpdating}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Upcoming */}
            {upcomingBookings.length > 0 && (
              <section>
                <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">Upcoming</h2>
                <div className="space-y-3">
                  {upcomingBookings.map((b) => (
                    <BookingRow
                      key={b.id}
                      booking={b}
                      onMarkArrived={handleMarkArrived}
                      onMarkNoShow={handleMarkNoShow}
                      isUpdating={isUpdating}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {!bookingsLoading && (bookings?.length ?? 0) === 0 && (
          <div className="card-dark p-12 text-center mt-2">
            <Users className="w-8 h-8 mx-auto mb-3 opacity-20" style={{ color: G }} />
            <p className="text-gray-400 font-heading font-semibold mb-1">No bookings yet</p>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Your first Grinly booking will appear here. Share your clinic link to get started.
            </p>
          </div>
        )}
      </div>
    </GrinlyLayout>
  );
};

export default DashboardPage;
