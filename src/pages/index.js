import * as React from "react";

const people = [
  {
    fName: "Adam",
    lName: "Robillard",
    pronouns: "he/him",
    title: "Web Designer & Developer",
    icon: 1,
    linkedIn: "https://www.linkedin.com/in/adam-robillard/",
  },
  {
    fName: "Amanda",
    lName: "McMillan",
    pronouns: "she/her",
    title: "Director of Brand Development",
    icon: 2,
    linkedIn: "https://www.linkedin.com/in/amanda-mcmillan-07339522/",
  },
  {
    fName: "Andrew",
    lName: "Vincent",
    pronouns: "he/him",
    title: "Partner & Content Director",
    icon: 3,
    linkedIn: "https://www.linkedin.com/in/andrew-vincent-a8bb7814/",
  },
  {
    fName: "Christopher",
    lName: "McCluskey",
    pronouns: "he/him",
    title: "Art Director",
    icon: 4,
  },
  {
    fName: "Cindy",
    lName: "MacBride",
    pronouns: "she/her",
    title: "Director of Client Experience",
    icon: 5,
    linkedIn: "https://www.linkedin.com/in/cindy-macbride-4a156226/",
  },
  {
    fName: "Danielle",
    lName: "Galacio",
    pronouns: "she/her",
    title: "Graphic Designer",
    icon: 6,
    linkedIn: "https://www.linkedin.com/in/danielle-galacio/",
  },
  {
    fName: "Guy",
    lName: "Freedman",
    pronouns: "he/him",
    title: "Partner & Advisor",
    icon: 7,
    linkedIn: "https://www.linkedin.com/in/guy-freedman-26979062/",
  },
  {
    fName: "Janik",
    lName: "Bastide",
    pronouns: "she/her",
    title: "Account Manager",
    icon: 1,
    linkedIn: "https://www.linkedin.com/in/janikbastide/",
  },
  {
    fName: "Joseph",
    lName: "Mathieu",
    pronouns: "he/him",
    title: "Writer & Project Manager",
    icon: 2,
    linkedIn: "https://www.linkedin.com/in/josephrmathieu/",
  },
  {
    fName: "Nadia",
    lName: "Collins",
    pronouns: "she/her",
    title: "Art Director",
    icon: 3,
    linkedIn: "https://www.linkedin.com/in/nadia-collins-00b66412/",
  },
  {
    fName: "Nina",
    lName: "Jane Drystek",
    pronouns: "she/her",
    title: "Manager of Digital Communications",
    icon: 4,
    linkedIn: "https://www.linkedin.com/in/nina-jane-drystek-2211108b/",
  },
  {
    fName: "Paul",
    lName: "Marconi",
    pronouns: "he/him",
    title: "Partner & Creative Director",
    icon: 5,
    linkedIn: "https://www.linkedin.com/in/paulmarconi/",
  },
  {
    fName: "Pascal",
    lName: "Huot",
    pronouns: "he/him",
    title: "Creative Producer",
    icon: 6,
  },
  {
    fName: "Rose",
    lName: "Seto",
    pronouns: "she/her",
    title: "Web Developer",
    icon: 7,
    linkedIn: "https://www.linkedin.com/in/roseseto/",
  },
  {
    fName: "Sho",
    lName: "Sengupta",
    pronouns: "he/him",
    title: "Communications & Account Strategist ",
    icon: 1,
    linkedIn: "https://www.linkedin.com/in/shohini-sho-sengupta/",
  },
];

const fontAthletics =
  "Athletics, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

const fontLust = "'Lust Text', Georgia, 'Times New Roman', Times, serif";

const baseStyles = {
  fontFamily: fontAthletics,
};

const h2styles = {
  borderBottom: "0.0625rem solid #ccc",
  marginTop: "2em",
};

const nameStyles = {
  color: "#e4526d",
  fontSize: "1.5rem",
  fontFamily: fontLust,
  fontWeight: 400,
};

const pronounStyles = {
  fontSize: "1.375rem",
  fontWeight: "400",
  fontFamily: fontAthletics,
};

const titleStyles = {
  fontSize: "1.25rem",
  fontWeight: "400",
  fontFamily: fontAthletics,
  // color: "#003a3a",
  margin: "0 0 1rem",
};

const iconStyles = {
  width: "3.25rem",
  display: "block",
  marginBottom: "1rem",
};

const linkStyles = {
  color: "inherit",
  textDecoration: "none",
  display: "block",
  fontSize: "1.125rem",
  marginBottom: `0.25rem`,
  fontFamily: fontAthletics,
};

const underlinedLinkStyles = {
  textDecoration: "underline",
};

const lastLinkStyles = {
  marginBottom: "1rem",
};

const logoStyles = {
  width: "7.8125rem",
  marginBottom: "1.5rem",
};

function copyCode(e, id) {
  const button = e.target;

  button.textContent = "Copied!";

  setTimeout(() => {
    button.textContent = "Copy as Code";
  }, 2000);

  const signature = document.getElementById(id).innerHTML;

  const cleanedSignature = signature.replaceAll("&quot;", "'");
  navigator.clipboard.writeText(cleanedSignature).then(
    () => {
      console.log("success");
    },
    () => {
      console.log("fail");
    }
  );
}

const IndexPage = () => {
  return (
    <main style={baseStyles}>
      <h1>Spruce Email Signatures</h1>
      <section id="introduction">
        <h2 style={h2styles}>Instructions</h2>
        <h3>Gmail (in browsers)</h3>
        <ol>
          <li>
            Go to settings gear icon {">"} <strong>See all settings</strong>{" "}
            button
          </li>
          <li>
            Scroll down to <strong>Signature</strong>
          </li>
          <li>
            On this website, highlight all content from your signature from name
            through logo.
          </li>
          <li>
            Copy paste into signature edit box. All styling should copy over
            properly.
          </li>
        </ol>
        <h3>HTML Signature</h3>
        <p>
          Some email clients need the actual html to style properly. Follow
          these easy steps
        </p>
        <ol>
          <li>
            Click the <strong>Copy as Code</strong> button for your signature,
            it will add the html code to your clipboard
          </li>
          <li>Find the signature settings in your client</li>
          <li>Paste it in code signature box if it exists</li>
        </ol>
        <p>
          If you are not sure how to set it up for your specific email client,
          check in with Adam and he will get you sorted.
        </p>
      </section>
      <section id="signatures">
        <h2 style={h2styles}>Signatures</h2>
        {people.map(({ fName, lName, pronouns, title, icon, linkedIn }) => (
          <div key={lName}>
            <div id={lName}>
              <div>
                <strong style={nameStyles}>
                  {`${fName} ${lName}`}{" "}
                  <span style={pronounStyles}>({pronouns})</span>
                </strong>
                <p style={titleStyles}>{title}</p>
              </div>
              <img
                src={`https://sprucecreative.ca/wp-content/uploads/2023/05/icon-${icon}.png`}
                style={iconStyles}
              />
              <div>
                <a
                  style={linkStyles}
                  href={`mailto:${fName.toLowerCase()}@sprucecreative.ca`}
                >
                  {fName.toLowerCase()}@sprucecreative.ca
                </a>
              </div>
              {linkedIn && (
                <div>
                  <a
                    style={{ ...linkStyles, ...underlinedLinkStyles }}
                    href={linkedIn}
                  >
                    Connect with me on LinkedIn
                  </a>
                </div>
              )}
              <div>
                <a
                  style={{ ...linkStyles, ...lastLinkStyles }}
                  href="https://sprucecreative.ca"
                >
                  sprucecreative.ca
                </a>
              </div>
              <div>
                <a href="https://sprucecreative.ca">
                  <img
                    style={logoStyles}
                    src="https://sprucecreative.ca/wp-content/uploads/2023/05/spruce-logo-radish.png"
                    alt="Spruce Creative"
                  />
                </a>
              </div>
            </div>
            <div style={{ height: "20px" }}></div>
            <button onClick={(e) => copyCode(e, lName)}>Copy as Code</button>
            <div style={{ height: "100px" }}></div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Spruce Email Signatures</title>;
