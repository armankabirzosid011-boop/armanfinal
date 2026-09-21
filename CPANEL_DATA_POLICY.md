# Business data policy

The frontend does not persist business/application data in browser storage. Domain data is read and written through PHP REST API endpoints backed by MySQL. Browser storage APIs are not used for patients, appointments, clinical records, prescriptions, payments, authentication, or settings.
