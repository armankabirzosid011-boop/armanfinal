function normalisePhone(raw) {
  if (!raw) return "";
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("880")) return digits;
  if (digits.startsWith("0")) return `880${digits.slice(1)}`;
  if (digits.length === 10) return `880${digits}`;
  return digits;
}
function buildWhatsAppUrl(phone, message) {
  const num = normalisePhone(phone);
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
function buildReportReadyMessage(patient, doctorName, clinicName, reportName) {
  const phone = patient.phone || patient.mobile || patient.contact || "";
  const msg = `Hello ${patient.fullName}, your ${reportName} report is ready at ${clinicName}. Please contact us to collect or view your report. Dr. ${doctorName}, ${clinicName}.`;
  return buildWhatsAppUrl(phone, msg);
}
function buildFollowUpMessage(patient, doctorName, clinicName, appointmentDate, appointmentTime) {
  const phone = patient.phone || patient.mobile || patient.contact || "";
  const msg = `Hello ${patient.fullName}, please attend your follow-up appointment on ${appointmentDate} at ${appointmentTime}. Location: ${clinicName}. Dr. ${doctorName}. For queries, please call us.`;
  return buildWhatsAppUrl(phone, msg);
}
export {
  buildReportReadyMessage as a,
  buildFollowUpMessage as b,
  buildWhatsAppUrl as c,
  normalisePhone as n
};
