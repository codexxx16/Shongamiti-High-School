body { margin: 0; font-family: 'Montserrat', sans-serif; background-color: #f8f8f8; color: #000; scroll-behavior: smooth; }

header.main-header { display: flex; align-items: center; background-color: #004d40; color: white; padding: 10px 20px; }

.school-logo { height: 60px; margin-right: 15px; border-radius: 8px; }

.nav-wrapper { overflow-x: auto; white-space: nowrap; background: #00796b; }

.scrolling-nav { display: flex; gap: 20px; padding: 10px; }

.scrolling-nav a { color: white; text-decoration: none; font-weight: bold; transition: color 0.3s; }

.scrolling-nav a:hover { color: #ffcc80; }

.hero { text-align: center; padding: 60px 20px; background: linear-gradient(to right, #b2dfdb, #e0f2f1); }

#typed { color: #000; font-size: 28px; font-weight: 700; }

.content-box { padding: 40px 20px; background-color: #fff; margin: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

.review-card { margin: 20px auto; max-width: 600px; background-color: #fafafa; padding: 20px; border-left: 6px solid #00796b; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

.review-card img { float: left; width: 80px; height: 80px; border-radius: 50%; margin-right: 15px; }

footer { background-color: #004d40; color: white; padding: 20px; text-align: center; font-size: 14px; }

footer a { color: #ffffff; margin: 0 10px; font-size: 20px; transition: color 0.3s; }

footer a:hover { color: #ffcc80; }

/* Theme Toggle (Moon and Sun) */ .theme-toggle { position: fixed; top: 20px; right: 20px; font-size: 24px; cursor: pointer; z-index: 1000; }

/* Hamburger Menu */ .hamburger { position: fixed; top: 20px; right: 60px; font-size: 24px; cursor: pointer; z-index: 1000; }

/* Responsive */ @media (max-width: 768px) { .main-header h1 { font-size: 20px; } .scrolling-nav a { font-size: 14px; } }
