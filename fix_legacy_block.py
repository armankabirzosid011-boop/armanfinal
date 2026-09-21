#!/usr/bin/env python3
"""Fix the legacy currentUser block in PatientDashboard.tsx."""
import sys

path = "source_build/dr.armankabir-main/src/frontend/src/components/PatientDashboard.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# The legacy currentUser block (unique - contains medicare_current_doctor)
old_block = '''                currentUser={{
                  name: (() => {
                    try {
                      const session = storage.getItem(
                        "medicare_current_doctor",
                      );
                      if (!session)
                        return currentRole === "patient"
                          ? patient.fullName
                          : "Unknown";
                      const registry: Array<{ id: string; name: string }> =
                        JSON.parse(
                          storageAdapter.getItem("medicare_doctors_registry") ||
                            "[]",
                        );
                      return (
                        registry.find((d) => d.id === session)?.name ??
                        "Unknown"
                      );
                    } catch {
                      return "Unknown";
                    }
                  })(),
                  role: viewerRole ?? "doctor",
                  email: (() => {
                    try {
                      const session = storage.getItem(
                        "medicare_current_doctor",
                      );
                      if (!session) return "";
                      const registry: Array<{ id: string; email?: string }> =
                        JSON.parse(
                          storageAdapter.getItem("medicare_doctors_registry") ||
                            "[]",
                        );
                      return (
                        (
                          registry.find((d) => d.id === session) as {
                            email?: string;
                          }
                        )?.email ?? session
                      );
                    } catch {
                      return "";
                    }
                  })(),
                }}'''

new_block = '''                currentUser={{
                  name: (() => {
                    try {
                      const email = getDoctorEmail();
                      if (email) {
                        const p = JSON.parse(
                          storage.getItem(`doctor_profile_${email}`) || "null",
                        );
                        if (p?.name) return p.name;
                      }
                    } catch {}
                    return currentRole === "patient"
                      ? (patient?.fullName ?? "Unknown")
                      : "Unknown";
                  })(),
                  role: viewerRole ?? "doctor",
                  email: getDoctorEmail(),
                }}'''

count = content.count(old_block)
print(f"Found {count} occurrence(s) of legacy block")

if count == 1:
    content = content.replace(old_block, new_block)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully")
elif not count:
    print("ERROR: block not found - file may be corrupted")
    sys.exit(1)
else:
    print("ERROR: multiple occurrences - aborting")
    sys.exit(1)
