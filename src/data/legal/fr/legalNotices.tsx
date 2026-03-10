import { LegalPageData } from "../types"

export const legalNotices: LegalPageData = {
  title: "MENTIONS LÉGALES & CONDITIONS D’UTILISATION",
  breadcrumbLabel: "Mentions Légales",

  intro: (
    <>
      Cette page fournit les informations légales relatives à la publication
      et à l’utilisation du site web de M•ART Geneva Makeup Academy. En
      accédant à ce site et en le parcourant, vous acceptez les conditions
      énoncées ci-dessous.
      <br />
      <br />
      Dernière mise à jour : 28/02/2026
    </>
  ),

  sections: [

    {
      title: "I. Informations sur l’éditeur",
      content: (
        <>
          <p>
            <strong>[Full Legal Company Name]*mandatory</strong>
          </p>

          <p>
            Siège social*mandatory : [Full Legal Address]
            <br />
            Numéro d’enregistrement (UID)*mandatory : [Registration Number]
            <br />
            Numéro de TVA : [If applicable]
          </p>

          <p>
            Exploité sous le nom : M•ART Geneva Makeup Academy
          </p>

          <p>
            Email de contact*mandatory : info@ecoledemaquillage.ch
            <br />
            Numéro de téléphone : +41 21 555 48 72
          </p>
        </>
      ),
    },

    {
      title: "II. Hébergement",
      content: (
        <>
          <p>Ce site web est hébergé par :</p>

          <p>
            Vercel Inc.
            <br />
            États-Unis
          </p>
        </>
      ),
    },

    {
      title: "III. Objet du site web",
      content: (
        <>
          <p>
            Le site web fournit des informations sur M•ART Geneva Makeup
            Academy, ses programmes et ses activités associées.
          </p>

          <p>
            Le site web comprend un formulaire de contact permettant aux
            utilisateurs de demander des informations.
          </p>

          <p>
            Le site web ne propose pas de services d’achat en ligne ni de
            portail étudiant. Un portail administratif interne peut exister
            à des fins opérationnelles.
          </p>

          <p>
            Les informations publiées sur ce site sont fournies à titre
            informatif uniquement et ne constituent pas une offre
            contractuelle contraignante, sauf indication expresse
            contraire.
          </p>
        </>
      ),
    },

    {
      title: "IV. Propriété intellectuelle",
      content: (
        <>
          <p>
            L’ensemble du contenu disponible sur ce site web, y compris,
            mais sans s’y limiter, les textes, images, graphiques,
            logos, éléments de design, mise en page et identité visuelle,
            est protégé par les lois relatives à la propriété
            intellectuelle.
          </p>

          <p>
            Sauf indication contraire, ce contenu est la propriété
            exclusive de M•ART Geneva Makeup Academy ou est utilisé
            sous licence appropriée.
          </p>

          <p>
            Toute reproduction, distribution, modification ou utilisation
            du contenu du site web sans autorisation écrite préalable est
            strictement interdite.
          </p>
        </>
      ),
    },

    {
      title: "V. Utilisation acceptable",
      content: (
        <>
          <p>
            Les utilisateurs s’engagent à accéder et utiliser ce site web
            conformément aux lois et réglementations applicables.
          </p>

          <p>Les utilisateurs ne doivent pas :</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Utiliser le site web à des fins illégales</li>
            <li>Tenter d’obtenir un accès non autorisé à des systèmes ou des données</li>
            <li>Interférer avec la sécurité ou le fonctionnement du site web</li>
            <li>Téléverser ou transmettre des logiciels malveillants ou du code nuisible</li>
            <li>Usurper une identité ou une affiliation</li>
          </ul>
        </>
      ),
    },

    {
      title: "VI. Liens hypertextes",
      content: (
        <>
          <p>
            La création de liens vers ce site web est autorisée à condition
            que le lien soit légal, loyal et non trompeur.
          </p>

          <p>
            Le site web peut contenir des liens vers des sites web externes.
            M•ART Geneva Makeup Academy ne contrôle pas et n’est pas
            responsable du contenu, de la disponibilité ou des pratiques
            de confidentialité de ces sites tiers.
          </p>
        </>
      ),
    },

    {
      title: "VII. Limitation de responsabilité",
      content: (
        <>
          <p>
            Le site web et son contenu sont fournis « tels quels » sans
            aucune garantie d’aucune sorte, expresse ou implicite.
          </p>

          <p>
            M•ART Geneva Makeup Academy ne pourra être tenu responsable
            des dommages directs ou indirects résultant de l’accès ou de
            l’utilisation de ce site web, y compris, sans s’y limiter,
            la perte de données, les interruptions techniques ou les
            inexactitudes dans les informations publiées.
          </p>

          <p>
            Nous ne garantissons pas un accès continu ou exempt
            d’erreurs au site web.
          </p>
        </>
      ),
    },

    {
      title: "VIII. Données personnelles et cookies",
      content: (
        <>
          <p>
            Pour obtenir des informations concernant le traitement
            des données personnelles, veuillez consulter notre
            Politique de Confidentialité.
          </p>

          <p>
            Pour obtenir des informations concernant les cookies
            et les technologies de suivi, veuillez consulter
            notre Politique de Cookies.
          </p>
        </>
      ),
    },

    {
      title: "IX. Droit applicable et juridiction",
      content: (
        <>
          <p>
            Les présentes Mentions Légales et Conditions d’Utilisation
            sont régies par le droit suisse.
          </p>

          <p>
            Tout litige relatif à l’utilisation de ce site web relève
            de la compétence des tribunaux compétents de Genève,
            Suisse.
          </p>

          <p>
            Si vous êtes un consommateur résidant dans l’Union
            européenne, les dispositions obligatoires de protection
            des consommateurs de votre pays de résidence peuvent
            également s’appliquer.
          </p>
        </>
      ),
    },

    {
      title: "X. Mises à jour",
      content: (
        <>
          <p>
            M•ART Geneva Makeup Academy se réserve le droit de
            modifier ces Mentions Légales et Conditions
            d’Utilisation à tout moment.
          </p>

          <p>
            Les utilisateurs sont invités à consulter cette page
            régulièrement afin de rester informés de toute mise à
            jour.
          </p>
        </>
      ),
    },

  ],
}