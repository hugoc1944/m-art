import { LegalPageData } from "../types"

export const privacyPolicy: LegalPageData = {

  title: "POLITIQUE DE CONFIDENTIALITÉ",

  breadcrumbLabel: "Politique de Confidentialité",

  intro: (
    <>
      M•ART Geneva Makeup Academy accorde une grande importance au traitement,
      à la confidentialité et à la sécurité des données personnelles. Cette
      Politique de Confidentialité explique comment les données personnelles
      sont collectées, traitées, stockées et protégées conformément au
      Règlement Général sur la Protection des Données (UE) 2016/679 (RGPD),
      à la législation suisse applicable en matière de protection des données
      et aux autres lois pertinentes.
      <br />
      <br />
      Dernière mise à jour : 28/02/2026
    </>
  ),

  sections: [

    {
      title: "I. Responsable du traitement",
      content: (
        <>
          <p>Le responsable du traitement des données personnelles est :</p>

          <p>
            <strong>[Full Legal Company Name]</strong>
            <br />
            Siège social : [Full Legal Address]
            <br />
            Numéro d’enregistrement : [Registration Number]
            <br />
            Numéro de TVA / UID : [If applicable]
          </p>

          <p>Exploité sous le nom : M•ART Geneva Makeup Academy</p>

          <p>
            Demandes générales : info@ecoledemaquillage.ch
            <br />
            Contact protection des données : privacy@ecoledemaquillage.ch
          </p>
        </>
      ),
    },

    {
      title: "II. Qu’est-ce qu’une donnée personnelle ?",
      content: (
        <>
          <p>
            Une donnée personnelle désigne toute information se rapportant
            à une personne physique identifiée ou identifiable, directement
            ou indirectement.
          </p>

          <p>
            Cela inclut par exemple les noms, adresses e-mail,
            numéros de téléphone, adresses IP et identifiants en ligne.
          </p>
        </>
      ),
    },

    {
      title: "III. Quelles données nous collectons",
      content: (
        <>
          <p>Nous collectons des données personnelles dans les situations suivantes :</p>

          <p><strong>1. Lorsque vous nous contactez</strong></p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Prénom</li>
            <li>Nom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Objet de votre demande</li>
            <li>Contenu du message</li>
          </ul>

          <p>
            Les champs marqués comme obligatoires sont nécessaires
            pour nous permettre de répondre à votre demande.
          </p>

          <p><strong>2. Lorsque vous naviguez sur notre site web</strong></p>

          <p>
            Nous pouvons collecter automatiquement des données techniques
            et d’interaction telles que l’adresse IP, le type de navigateur,
            le type d’appareil, les pages visitées, le temps passé sur les
            pages et les événements d’interaction.
          </p>

          <p>
            Ces données sont collectées via des outils de suivi
            basés sur le consentement, notamment Google Analytics,
            Google Tag Manager, Google Ads et Meta Pixel.
          </p>
        </>
      ),
    },

    {
      title: "IV. Finalités du traitement",
      content: (
        <>
          <p>Nous traitons les données personnelles pour les finalités suivantes :</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Répondre aux demandes et aux prises de contact</li>
            <li>Fournir des informations sur nos programmes</li>
            <li>Améliorer les performances du site web et l’expérience utilisateur</li>
            <li>Mesurer l’efficacité des actions marketing et publicitaires</li>
            <li>Garantir la sécurité et l’intégrité du site web</li>
          </ul>

          <p>
            Nous ne procédons pas à des décisions automatisées
            produisant des effets juridiques ou similaires significatifs.
          </p>
        </>
      ),
    },

    {
      title: "V. Base légale du traitement",
      content: (
        <>
          <p>Les données personnelles sont traitées sur la base de :</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Votre consentement (pour les cookies analytiques, marketing et les communications)</li>
            <li>Notre intérêt légitime à répondre aux demandes et à assurer la sécurité du site web</li>
            <li>Le respect des obligations légales applicables lorsque nécessaire</li>
          </ul>
        </>
      ),
    },

    {
      title: "VI. Conservation des données",
      content: (
        <>
          <p>Les données du formulaire de contact sont conservées pendant une durée maximale de 365 jours.</p>

          <p>
            Si aucune interaction supplémentaire n’a lieu pendant cette
            période, les données sont automatiquement supprimées.
          </p>

          <p>
            Vous pouvez demander la suppression de vos données à tout moment
            en contactant privacy@ecoledemaquillage.ch.
          </p>

          <p>
            Les durées de conservation des données analytiques et marketing
            dépendent de la configuration de chaque plateforme.
          </p>
        </>
      ),
    },

    {
      title: "VII. Partage des données et sous-traitants",
      content: (
        <>
          <p>Nous ne vendons pas de données personnelles.</p>

          <p>
            Les données personnelles peuvent être traitées par des
            prestataires de services de confiance uniquement à des
            fins opérationnelles :
          </p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Vercel Inc. (infrastructure d’hébergement)</li>
            <li>Resend (services d’envoi d’e-mails)</li>
            <li>Prisma (couche de gestion de base de données)</li>
            <li>Google Analytics et Google Ads</li>
            <li>Meta Pixel</li>
          </ul>

          <p>
            Ces prestataires sont contractuellement tenus de garantir
            des mesures appropriées de protection des données.
          </p>
        </>
      ),
    },

    {
      title: "VIII. Transferts internationaux de données",
      content: (
        <>
          <p>
            Certains prestataires de services peuvent traiter des données
            en dehors de la Suisse ou de l’Union européenne.
          </p>

          <p>
            Lorsque cela est applicable, les transferts sont sécurisés
            au moyen de Clauses Contractuelles Types (CCT), de décisions
            d’adéquation ou d’autres mécanismes juridiques équivalents.
          </p>
        </>
      ),
    },

    {
      title: "IX. Sécurité des données",
      content: (
        <>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger les données personnelles, notamment
            la communication chiffrée HTTPS, une infrastructure d’hébergement
            sécurisée, le contrôle des accès et la protection des bases
            de données.
          </p>

          <p>
            Bien que nous nous efforcions de protéger vos données,
            aucun système ne peut garantir une sécurité absolue.
          </p>
        </>
      ),
    },

    {
      title: "X. Vos droits",
      content: (
        <>
          <p>Conformément au RGPD et aux lois applicables, vous disposez du droit de :</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Accéder à vos données personnelles</li>
            <li>Demander la rectification des données inexactes</li>
            <li>Demander l’effacement de vos données</li>
            <li>Limiter ou vous opposer au traitement</li>
            <li>Retirer votre consentement à tout moment</li>
            <li>Demander la portabilité des données lorsque applicable</li>
          </ul>

          <p>
            Pour exercer vos droits, contactez :
            <br />
            privacy@ecoledemaquillage.ch
          </p>

          <p>
            Vous avez également le droit d’introduire une réclamation
            auprès de votre autorité locale de protection des données.
          </p>
        </>
      ),
    },

    {
      title: "XI. Cookies",
      content: (
        <>
          <p>Notre site web utilise des cookies essentiels, analytiques et marketing.</p>

          <p>
            Les cookies non essentiels ne sont activés qu’après votre
            consentement explicite via notre bannière de cookies, où
            vous pouvez gérer vos préférences à tout moment.
          </p>

          <p>
            Pour plus d’informations, veuillez consulter notre
            Politique de Cookies.
          </p>
        </>
      ),
    },

    {
      title: "XII. Modifications de cette politique",
      content: (
        <>
          <p>
            Nous pouvons mettre à jour cette Politique de Confidentialité
            de temps à autre afin de refléter des évolutions juridiques
            ou opérationnelles.
          </p>

          <p>
            La version la plus récente sera toujours disponible sur cette
            page avec la date de mise à jour correspondante.
          </p>
        </>
      ),
    },

  ]
}