import { useEffect, useState } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

export default function Home(){
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/wiki')
      .then(res => {
        if(!res.ok) throw new Error('Error fetching data')
        return res.json()
      })
      .then(setData)
      .catch(err => setError(err.message))
  }, [])

  return (
    <div className="container">
      <Head>
        <title>One Piece Wiki - Marina y Yonkou</title>
      </Head>

      <header>
        <h1>One Piece Wiki</h1>
        <p className="subtitle">Wiki de Marina, Yonkou y facciones.</p>
      </header>

      <main>
        {error && <p className="error">{error}</p>}
        {!data && !error && <p className="loading">Cargando...</p>}

        {data && (
          <div className="grid">
            <section className="card">
              <h2>Marina</h2>
              {data.marine.map((m, i) => (
                <article key={i} className="item">
                  <h3>{m.name} ({m.rank})</h3>
                  <p>{m.bio}</p>
                  <p><strong>Estilos:</strong> {m.styles.join(', ')}</p>
                  <p><strong>Nivel:</strong> {m.power}</p>
                </article>
              ))}
            </section>

            <section className="card">
              <h2>Yonkou</h2>
              {data.yonkou.map((y, i) => (
                <article key={i} className="item">
                  <h3>{y.name}</h3>
                  <p>{y.bio}</p>
                  <p><strong>Miembros:</strong> {y.crew.join(', ')}</p>
                  <p><strong>Estilos:</strong> {y.styles.join(', ')}</p>
                  <p><strong>Nivel:</strong> {y.power}</p>
                </article>
              ))}
            </section>

            <section className="card">
              <h2>Otras Facciones</h2>
              {data.others.map((o, i) => (
                <article key={i} className="item">
                  <h3>{o.name}</h3>
                  <p>{o.desc}</p>
                </article>
              ))}
            </section>
          </div>
        )}
      </main>

      <footer>
        <p>Proyecto desplegado en Vercel.</p>
      </footer>

      <style jsx>{`
        .container{max-width:900px;margin:20px auto;padding:16px;font-family:Arial}
        .grid{display:grid;gap:16px}
        .card{background:white;padding:12px;border-radius:8px;box-shadow:0 0 10px #ddd}
        .item{border-top:1px solid #eee;margin-top:8px;padding-top:8px}
        .subtitle{color:#555}
        footer{margin-top:20px;color:#555}
        .error{color:red}
      `}</style>
    </div>
  )
}
