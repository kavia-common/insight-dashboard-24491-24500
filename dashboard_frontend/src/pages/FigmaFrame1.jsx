import React, { useEffect, useRef, useState } from 'react';
// Styles: use a local CSS that @imports the public assets stylesheet and provides scoping root class
import './FigmaFrame1.styles.css';

/**
 * PUBLIC_INTERFACE
 * FigmaFrame1
 * 
 * Origin:
 * - Converted from /assets/figma/frame-1/index.html and /assets/figma/frame-1/script.js
 * - Styles come from /assets/figma/frame-1/style.css
 * 
 * Adjustments:
 * - Wrapped all markup in a scoped root div .figma-frame1-root to reduce global leakage.
 * - Converted class to className, self-closed tags, and resolved asset paths to public /assets/... URLs.
 * - Sidebar toggle behavior is implemented via React state/effect instead of direct DOM manipulation.
 * - Added keyboard focus helper behavior within React.
 */
export default function FigmaFrame1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const hasSetTabClassRef = useRef(false);

  // Mimic the accessible focus outlines for keyboard users from script.js
  useEffect(() => {
    function handleFirstTab(e) {
      if (e.key === 'Tab' && !hasSetTabClassRef.current) {
        document.body.classList.add('user-is-tabbing');
        hasSetTabClassRef.current = true;
        window.removeEventListener('keydown', handleFirstTab);
      }
    }
    window.addEventListener('keydown', handleFirstTab);
    return () => window.removeEventListener('keydown', handleFirstTab);
  }, []);

  // Keep aria-expanded in sync
  const toggleSidebar = () => {
    setSidebarOpen(v => !v);
  };

  return (
    <div className="figma-frame1-root">
      <div className="app-shell">
        <aside className={`sidebar${sidebarOpen ? ' open' : ''}`} aria-label="Primary">
          <div className="brand">
            <div className="brand-mark">
              <img className="brand-vector" src="/assets/figmaimages/figma_image_1_6.png" alt="" />
              <img className="brand-ellipse" src="/assets/figmaimages/figma_image_1_7.png" alt="" />
            </div>
            <span className="brand-text">excuseme</span>
          </div>

          <nav className="nav">
            <ul>
              <li className="nav-item active">
                <img src="/assets/figmaimages/figma_image_6_13.png" alt="" className="nav-icon" />
                <span>Home</span>
              </li>
              <li className="nav-item">
                <img src="/assets/figmaimages/figma_image_6_19.png" alt="" className="nav-icon" />
                <span>Bag</span>
              </li>
              <li className="nav-item">
                <img src="/assets/figmaimages/figma_image_6_17.png" alt="" className="nav-icon" />
                <span>Chart</span>
              </li>
              <li className="nav-item">
                <img src="/assets/figmaimages/figma_image_6_21.png" alt="" className="nav-icon" />
                <span>Chart Alt</span>
              </li>
              <li className="nav-item">
                <img src="/assets/figmaimages/figma_image_6_15.png" alt="" className="nav-icon" />
                <span>Box</span>
              </li>
            </ul>
          </nav>

          <div className="sidebar-accent"></div>
          <div className="sidebar-avatar">
            <img src="/assets/figmaimages/figma_image_6_22.png" alt="User avatar" />
          </div>
        </aside>

        <div className="content">
          <header className="header" aria-label="Top navigation">
            <button
              className="sidebar-toggle"
              aria-label="Toggle sidebar"
              aria-expanded={sidebarOpen ? 'true' : 'false'}
              onClick={toggleSidebar}
              type="button"
            >
              <img src="/assets/figmaimages/figma_image_5_5.png" alt="menu" />
            </button>
            <nav className="top-links" aria-label="Secondary">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="top-link">home</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="top-link">support</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="top-link">my account</a>
            </nav>
          </header>

          <main className="main">
            <section className="cards">
              {/* Card 1 */}
              <article className="card">
                <header className="card-head">
                  <div className="card-title">
                    <img src="/assets/figmaimages/figma_image_8_33.png" className="title-icon" alt="chat" />
                    <h2>New Message</h2>
                  </div>
                  <div className="card-metric">
                    <div className="metric-value">85</div>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: '52%' }}></div>
                    </div>
                    <div className="sub-metrics">
                      <div className="sub">
                        <span className="sub-value">60%</span>
                        <span className="sub-label">Daily Goal</span>
                      </div>
                      <div className="sub">
                        <span className="sub-value">72</span>
                        <span className="sub-label">This week</span>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="divider"></div>
                <div className="card-foot">
                  <div className="badge">
                    <span>75%</span>
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article className="card">
                <header className="card-head">
                  <div className="card-title">
                    <img src="/assets/figmaimages/figma_image_14_81.png" className="title-icon small" alt="apps" />
                    <h2>Leads</h2>
                  </div>
                  <div className="card-metric">
                    <div className="metric-value">85</div>
                    <div className="ring">
                      <img className="ring-ellipse" src="/assets/figmaimages/figma_image_14_83.png" alt="progress ring" />
                      <img className="ring-vector" src="/assets/figmaimages/figma_image_14_85.png" alt="arc" />
                    </div>
                    <div className="badge badge-right">
                      <span>63%</span>
                    </div>
                  </div>
                </header>
              </article>

              {/* Card 3 */}
              <article className="card">
                <header className="card-head">
                  <div className="card-title">
                    <img src="/assets/figmaimages/figma_image_8_33.png" className="title-icon" alt="chat" />
                    <h2>New Message</h2>
                  </div>
                  <div className="card-metric">
                    <div className="metric-value">85</div>
                    <div className="progress">
                      <div className="progress-fill" style={{ width: '52%' }}></div>
                    </div>
                    <div className="response">
                      <span className="sub-label">Response Rate</span>
                    </div>
                  </div>
                </header>
                <div className="divider"></div>
                <div className="card-foot">
                  <div className="badge">
                    <span>75%</span>
                  </div>
                </div>
              </article>
            </section>

            {/* Chart area */}
            <section className="chart-area" aria-label="Line chart">
              <div className="chart-surface">
                <div className="grid grid-x">
                  {/* Vertical grid lines */}
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="grid grid-y">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="axes"></div>

                {/* Two line series approximations */}
                <svg className="series series-a" viewBox="0 0 701 210" preserveAspectRatio="none" aria-hidden="true">
                  <polyline
                    fill="none"
                    stroke="var(--ds-grid-soft)"
                    strokeWidth="2"
                    points="0,144 60,100 110,190 160,184 210,137 260,208 310,206 360,193 410,108 460,80 510,204 560,56 701,60"
                  />
                </svg>
                <svg className="series series-b" viewBox="0 0 701 210" preserveAspectRatio="none" aria-hidden="true">
                  <polyline
                    fill="none"
                    stroke="var(--ocean-accent)"
                    strokeWidth="2"
                    points="0,156 60,84 110,205 160,187 210,112 260,160 310,180 360,150 410,148 460,210 510,120 560,142 701,130"
                  />
                </svg>

                {/* Markers */}
                <img className="marker m1" src="/assets/figmaimages/figma_image_15_649.png" alt="" />
                {/* Decorative dots */}
                <div className="dot d2"></div><div className="dot d3"></div><div className="dot d4"></div><div className="dot d5"></div>
              </div>

              <div className="chart-labels">
                <div className="y-labels">
                  <span>1250</span>
                  <span>1000</span>
                  <span>750</span>
                  <span>500</span>
                  <span>250</span>
                  <span>0</span>
                </div>
                <div className="x-labels">
                  <span>Text</span><span>Text</span><span>Text</span><span>Text</span><span>Text</span>
                  <span>Text</span><span>Text</span><span>Text</span><span>Text</span><span>Text</span>
                  <span>Text</span><span>Text</span><span>Text</span><span>Text</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
