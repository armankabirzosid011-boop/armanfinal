<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Arman Kabir Care — Database Setup</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 16px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        h1 {
            color: #0f766e;
            font-size: 24px;
            margin-bottom: 8px;
        }
        p { color: #666; margin-bottom: 24px; font-size: 14px; line-height: 1.5; }
        label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: #333;
            margin-bottom: 4px;
        }
        input, select {
            width: 100%;
            padding: 10px 12px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 14px;
            margin-bottom: 16px;
            transition: border-color 0.2s;
        }
        input:focus { outline: none; border-color: #14b8a6; }
        .row { display: flex; gap: 12px; }
        .row > * { flex: 1; }
        button {
            background: #0f766e;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: background 0.2s;
        }
        button:hover { background: #115e59; }
        button:disabled { opacity: 0.5; cursor: not-allowed; }
        .message {
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 16px;
            font-size: 14px;
            display: none;
        }
        .success { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; display: block; }
        .error { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; display: block; }
        .info { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; display: block; }
        .step { display: none; }
        .step.active { display: block; }
        .step-indicator {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-bottom: 32px;
        }
        .step-dot {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 700;
            color: #94a3b8;
        }
        .step-dot.active { background: #0f766e; color: white; }
        .step-dot.done { background: #14b8a6; color: white; }
        code {
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 13px;
        }
        .checkbox-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
        }
        .checkbox-row input { width: auto; margin-bottom: 0; }
        .checkbox-row label { margin-bottom: 0; }
        .loading {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid #e2e8f0;
            border-top-color: #0f766e;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            margin-right: 8px;
            vertical-align: middle;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .test-result {
            font-size: 13px;
            padding: 8px 12px;
            border-radius: 6px;
            margin-bottom: 16px;
        }
        .test-result.pass { background: #d1fae5; color: #065f46; }
        .test-result.fail { background: #fee2e2; color: #991b1b; }
        hr { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏥 Database Setup</h1>
        <p>Set up the MySQL database for <strong>Dr. Arman Kabir Care</strong>.</p>

        <div id="message" class="message"></div>

        <div class="step-indicator">
            <div class="step-dot active" id="dot1">1</div>
            <div class="step-dot" id="dot2">2</div>
            <div class="step-dot" id="dot3">3</div>
            <div class="step-dot" id="dot4">4</div>
        </div>

        <!-- Step 1: Connection -->
        <div class="step active" id="step1">
            <h2 style="font-size:18px;color:#333;margin-bottom:16px;">🔌 MySQL Connection</h2>
            <p>Enter your MySQL credentials. If you don't have a database user yet, you can create one in <a href="/phpmyadmin/" target="_blank">phpMyAdmin</a> first.</p>
            
            <label for="host">Host</label>
            <input type="text" id="host" value="127.0.0.1" placeholder="localhost">
            
            <label for="port">Port</label>
            <input type="number" id="port" value="3306" placeholder="3306">
            
            <label for="user">MySQL Username</label>
            <input type="text" id="user" value="drarmank_care_user" placeholder="e.g. drarmank_care_user">
            
            <label for="pass">MySQL Password</label>
            <input type="password" id="pass" placeholder="Enter MySQL password">
            
            <label for="dbname">Database Name</label>
            <input type="text" id="dbname" value="drarmank_care" placeholder="e.g. drarmank_care">

            <div id="testResult" class="test-result" style="display:none;"></div>
            
            <button onclick="testConnection()" id="testBtn">🔍 Test Connection</button>
            <br><br>
            <button onclick="step1Next()" id="nextBtn" disabled style="background:#94a3b8;">Next →</button>
        </div>

        <!-- Step 2: Create DB & Run Migrations -->
        <div class="step" id="step2">
            <h2 style="font-size:18px;color:#333;margin-bottom:16px;">⚙️ Database Setup</h2>
            <p>This will create the database and run all migrations (24 tables + seed data).</p>
            
            <div class="checkbox-row">
                <input type="checkbox" id="freshRun">
                <label for="freshRun">Drop existing tables first (fresh start)</label>
            </div>
            <div class="checkbox-row">
                <input type="checkbox" id="runSeed" checked>
                <label for="runSeed">Load seed data (admin user, settings, etc.)</label>
            </div>

            <div id="migrateResult" style="margin-bottom:16px;"></div>
            
            <button onclick="runMigration()" id="migrateBtn">🚀 Run Database Setup</button>
            <br><br>
            <button onclick="goToStep(3)" id="step2Next" disabled style="background:#94a3b8;">Next →</button>
        </div>

        <!-- Step 3: Save .env -->
        <div class="step" id="step3">
            <h2 style="font-size:18px;color:#333;margin-bottom:16px;">💾 Save Configuration</h2>
            <p>The credentials will be saved to <code>.env</code> file in your home directory.</p>
            
            <div id="saveResult" class="test-result" style="display:none;"></div>
            
            <button onclick="saveEnv()" id="saveBtn">💾 Save .env File</button>
            <br><br>
            <button onclick="goToStep(4)" id="step3Next" disabled style="background:#94a3b8;">Next →</button>
        </div>

        <!-- Step 4: Done -->
        <div class="step" id="step4">
            <h2 style="font-size:18px;color:#333;margin-bottom:16px;">✅ All Done!</h2>
            <p>Your database is set up and configured. You can now:</p>
            
            <ul style="margin-left:20px;line-height:2;color:#555;">
                <li>Login as <strong>admin@drarmankabir.com</strong> with password <strong>admin123</strong></li>
                <li><a href="/" target="_blank">Go to the application →</a></li>
                <li><a href="/phpmyadmin/" target="_blank">Manage database via phpMyAdmin →</a></li>
            </ul>
            
            <hr>
            <p style="font-size:13px;">⚠️ <strong>Security:</strong> Change the default admin password after first login!</p>
            
            <button onclick="verifyLogin()">🔐 Test Login</button>
            <div id="loginResult" style="margin-top:12px;"></div>
        </div>
    </div>

    <script>
        let dbConfig = { host: '127.0.0.1', port: 3306, user: '', pass: '', dbname: 'drarmank_care' };

        function showMessage(msg, type) {
            const el = document.getElementById('message');
            el.className = 'message ' + type;
            el.textContent = msg;
            el.style.display = 'block';
        }

        function clearMessage() {
            document.getElementById('message').style.display = 'none';
        }

        function testConnection() {
            const btn = document.getElementById('testBtn');
            const result = document.getElementById('testResult');
            btn.disabled = true;
            btn.innerHTML = '<span class="loading"></span> Testing...';
            result.style.display = 'none';

            dbConfig = {
                host: document.getElementById('host').value,
                port: parseInt(document.getElementById('port').value) || 3306,
                user: document.getElementById('user').value,
                pass: document.getElementById('pass').value,
                dbname: document.getElementById('dbname').value
            };

            fetch('/api/setup-test.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'test', ...dbConfig })
            })
            .then(r => r.json())
            .then(data => {
                btn.disabled = false;
                btn.innerHTML = '🔍 Test Connection';
                result.style.display = 'block';
                if (data.success) {
                    result.className = 'test-result pass';
                    result.innerHTML = '✅ ' + data.message;
                    if (data.tables) {
                        result.innerHTML += '<br><small>Tables: ' + data.tables.join(', ') + '</small>';
                    }
                    document.getElementById('nextBtn').disabled = false;
                    document.getElementById('nextBtn').style.background = '#0f766e';
                } else {
                    result.className = 'test-result fail';
                    result.textContent = '❌ ' + data.message;
                }
            })
            .catch(err => {
                btn.disabled = false;
                btn.innerHTML = '🔍 Test Connection';
                result.style.display = 'block';
                result.className = 'test-result fail';
                result.textContent = '❌ Connection error: ' + err.message;
            });
        }

        function step1Next() {
            if (!document.getElementById('nextBtn').disabled) {
                goToStep(2);
            }
        }

        function runMigration() {
            const btn = document.getElementById('migrateBtn');
            const result = document.getElementById('migrateResult');
            btn.disabled = true;
            btn.innerHTML = '<span class="loading"></span> Setting up database...';
            result.innerHTML = '<div class="info">Starting database setup...</div>';

            fetch('/api/setup-test.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'migrate',
                    ...dbConfig,
                    fresh: document.getElementById('freshRun').checked,
                    seed: document.getElementById('runSeed').checked
                })
            })
            .then(r => r.json())
            .then(data => {
                btn.disabled = false;
                btn.innerHTML = '🚀 Run Database Setup';
                if (data.success) {
                    result.innerHTML = '<div class="success">✅ ' + data.message + '</div>';
                    if (data.details) {
                        result.innerHTML += '<pre style="font-size:12px;background:#f8fafc;padding:12px;border-radius:6px;margin-top:8px;max-height:300px;overflow:auto;">' + data.details + '</pre>';
                    }
                    document.getElementById('step2Next').disabled = false;
                    document.getElementById('step2Next').style.background = '#0f766e';
                } else {
                    result.innerHTML = '<div class="error">❌ ' + data.message + '</div>';
                    if (data.details) {
                        result.innerHTML += '<pre style="font-size:12px;background:#f8fafc;padding:12px;border-radius:6px;margin-top:8px;max-height:300px;overflow:auto;">' + data.details + '</pre>';
                    }
                }
            })
            .catch(err => {
                btn.disabled = false;
                btn.innerHTML = '🚀 Run Database Setup';
                result.innerHTML = '<div class="error">❌ Error: ' + err.message + '</div>';
            });
        }

        function saveEnv() {
            const btn = document.getElementById('saveBtn');
            const result = document.getElementById('saveResult');
            btn.disabled = true;
            btn.innerHTML = '<span class="loading"></span> Saving...';
            result.style.display = 'none';

            fetch('/api/setup-test.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'saveenv', ...dbConfig })
            })
            .then(r => r.json())
            .then(data => {
                btn.disabled = false;
                btn.innerHTML = '💾 Save .env File';
                result.style.display = 'block';
                if (data.success) {
                    result.className = 'test-result pass';
                    result.innerHTML = '✅ ' + data.message;
                    document.getElementById('step3Next').disabled = false;
                    document.getElementById('step3Next').style.background = '#0f766e';
                } else {
                    result.className = 'test-result fail';
                    result.textContent = '❌ ' + data.message;
                }
            })
            .catch(err => {
                btn.disabled = false;
                btn.innerHTML = '💾 Save .env File';
                result.style.display = 'block';
                result.className = 'test-result fail';
                result.textContent = '❌ Error: ' + err.message;
            });
        }

        function verifyLogin() {
            const result = document.getElementById('loginResult');
            result.innerHTML = '<div class="info"><span class="loading"></span> Testing login...</div>';

            fetch('/api/auth/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'admin@drarmankabir.com', password: 'admin123' })
            })
            .then(r => r.json())
            .then(data => {
                if (data.success) {
                    result.innerHTML = '<div class="success">✅ Login successful! Welcome ' + data.data.user.full_name + '</div>';
                } else {
                    result.innerHTML = '<div class="error">❌ Login failed: ' + data.message + '</div>';
                }
            })
            .catch(err => {
                result.innerHTML = '<div class="error">❌ Error: ' + err.message + '</div>';
            });
        }

        function goToStep(n) {
            document.querySelectorAll('.step').forEach((el, i) => {
                el.classList.toggle('active', i + 1 === n);
            });
            document.querySelectorAll('.step-dot').forEach((el, i) => {
                el.classList.toggle('active', i + 1 === n);
                el.classList.toggle('done', i + 1 < n);
            });
        }
    </script>
</body>
</html>
