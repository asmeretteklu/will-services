import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#000000', 
      color: '#ffffff', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        padding: '20px',
        borderBottom: '1px solid #333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37' }}>
          WILL
        </div>
        
        <nav style={{ display: 'flex', gap: '30px' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
          <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </nav>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link href="/login" style={{
            color: '#d4af37',
            textDecoration: 'none',
            border: '1px solid #d4af37',
            padding: '8px 16px',
            borderRadius: '5px'
          }}>
            Login
          </Link>
          <Link href="/register" style={{
            backgroundColor: '#d4af37',
            color: '#000',
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Professional Services
          <br />
          <span style={{ color: '#d4af37' }}>Made Simple</span>
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#ccc',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Expert data entry, passport services, and website development. 
          Quality guaranteed with professional results.
        </p>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/services" style={{
            backgroundColor: '#d4af37',
            color: '#000',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            View Services
          </Link>
          <Link href="/contact" style={{
            border: '2px solid #d4af37',
            color: '#d4af37',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: '#111',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#d4af37', marginBottom: '10px' }}>500+</div>
            <div style={{ color: '#999' }}>Happy Clients</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#d4af37', marginBottom: '10px' }}>98%</div>
            <div style={{ color: '#999' }}>Success Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#d4af37', marginBottom: '10px' }}>24/7</div>
            <div style={{ color: '#999' }}>Support</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#d4af37', marginBottom: '10px' }}>50+</div>
            <div style={{ color: '#999' }}>Experts</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '50px'
        }}>
          Our Services
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {/* Service 1 */}
          <div style={{
            backgroundColor: '#111',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>📊</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Data Entry</h3>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>
              Professional data processing with 99.9% accuracy guarantee.
            </p>
            <div style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '20px' }}>$50+</div>
          </div>
          
          {/* Service 2 */}
          <div style={{
            backgroundColor: '#111',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>📝</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Passport Services</h3>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>
              Complete passport application assistance with expert guidance.
            </p>
            <div style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '20px' }}>$100+</div>
          </div>
          
          {/* Service 3 */}
          <div style={{
            backgroundColor: '#111',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>💻</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Web Development</h3>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>
              Custom website development with modern technologies.
            </p>
            <div style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '20px' }}>$500+</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#111',
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: '1px solid #333'
      }}>
        <p style={{ color: '#999' }}>© 2024 WILL. All rights reserved.</p>
        <p style={{ color: '#666', marginTop: '10px' }}>Professional Services Platform</p>
      </footer>
    </div>
  )
}