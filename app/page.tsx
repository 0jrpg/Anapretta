import styles from "./page.module.css";

const sellers = [
  { name: "Vera", phone: "554396161362" },
  { name: "Lúcia", phone: "554396804263" },
  { name: "Márcia", phone: "554396342597" },
  { name: "Néia", phone: "554396576435" },
  { name: "Kétlen", phone: "554384534181" },
  { name: "Neuli", phone: "554396444483" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={`${styles.eyebrow} reveal`} style={{ animationDelay: "0.05s" }}>
          Boutique Feminina
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/56106095_2057093267930090_6581649038767030272_n.jpg?ccb=11-4&oh=01_Q5Aa4gHyBhNSl-9_52xkle7MvL5wdAqE-fGnwef117cKXd01PA&oe=6A22F38D&_nc_sid=5e03e0&_nc_cat=105"
          alt="Foto da Loja Ana Pretta"
          className={`${styles.photo} reveal`}
          style={{ animationDelay: "0.15s" }}
        />

        <h1 className={`${styles.name} reveal`} style={{ animationDelay: "0.25s" }}>
          Ana Pretta
        </h1>

        <svg
          className={styles.stitch}
          width="220"
          height="14"
          viewBox="0 0 220 14"
          aria-hidden="true"
        >
          <path d="M2 7 Q 55 -2, 110 7 T 218 7" />
        </svg>

        <p className={`${styles.tagline} reveal`} style={{ animationDelay: "0.3s" }}>
          Peças escolhidas com cuidado, para vestir com presença.
        </p>

        <nav className={`${styles.links} reveal`} style={{ animationDelay: "0.35s" }} aria-label="Links de contato">
          <a
            href="https://www.instagram.com/ana_pretta/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.icon} aria-hidden="true">📸</span>
            Nosso Instagram
          </a>

          <a
            href="https://wa.me/5543999774509"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.icon} aria-hidden="true">💬</span>
            Nosso WhatsApp
          </a>

          <a href="mailto:anapretta@uol.com.br" className={styles.link}>
            <span className={styles.icon} aria-hidden="true">✉️</span>
            Nosso E-mail
          </a>
        </nav>

        <div className={styles.divider} />

        <details className={`${styles.accordion} reveal`} style={{ animationDelay: "0.4s" }}>
          <summary className={styles.summary}>
            Equipe de vendas
            <span className={styles.plus}>+</span>
          </summary>
          <div className={styles.sellerList}>
            {sellers.map((seller) => (
              <a
                key={seller.phone}
                href={`https://wa.me/${seller.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sellerLink}
              >
                <span aria-hidden="true">💬</span>
                Vendedora {seller.name}
              </a>
            ))}
          </div>
        </details>

        <div className={`${styles.mapWrap} reveal`} style={{ animationDelay: "0.45s" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.5366447836454!2d-50.07977272455509!3d-23.296280351907384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ea83c33e4dce3b%3A0xfa587bc499604567!2sLoja%20Ana%20Pretta!5e0!3m2!1spt-BR!2sus!4v1779822348413!5m2!1spt-BR!2sus"
            loading="lazy"
            title="Localização da Loja Ana Pretta"
          />
        </div>

        <div className={styles.footer}>
          <p>© 2026 Ana Pretta — Todos os direitos reservados.</p>
          <p>Programado e feito por João Ricardo, @0jrpg</p>
        </div>
      </div>
    </main>
  );
}
