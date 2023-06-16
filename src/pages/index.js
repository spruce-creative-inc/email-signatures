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

const fontLust = "Lust, Georgia, 'Times New Roman', Times, serif";

const baseStyles = {
  fontFamily: fontAthletics,
};

const nameStyles = {
  color: "#e4526d",
  fontSize: "1.5rem",
  fontFamily: fontLust,
  fontWeight: 500,
};

const pronounStyles = {
  fontSize: "1.375rem",
  fontWeight: "400",
  fontFamily: fontAthletics,
};

const titleStyles = {
  fontSize: "1.375rem",
  fontWeight: "400",
  fontFamily: fontAthletics,
  color: "#003a3a",
  margin: "0 0 1rem",
};

const iconStyles = {
  width: "3.25rem",
  display: "block",
  marginBottom: "1rem",
};

const linkStyles = {
  color: "#333333",
  textDecoration: "none",
  display: "block",
  fontSize: "1.125rem",
  marginBottom: `0.25rem`,
};

const lastLinkStyles = {
  marginBottom: "1rem",
};

const logoStyles = {
  width: "7.8125rem",
};

const IndexPage = () => {
  return (
    <main>
      <h1>Spruce Email Signatures</h1>
      {people.map(({ fName, lName, pronouns, title, icon, linkedIn }) => (
        <div
          key={lName}
          style={baseStyles}
        >
          <strong style={nameStyles}>
            {fName} {lName} <span style={pronounStyles}>({pronouns})</span>
          </strong>
          <p style={titleStyles}>{title}</p>
          <img
            src={`https://sprucecreative.ca/wp-content/uploads/2023/05/icon-${icon}.png`}
            style={iconStyles}
          />
          <a
            style={linkStyles}
            href={`mailto:${fName.toLowerCase()}@sprucecreative.ca`}
          >
            {fName.toLowerCase()}@sprucecreative.ca
          </a>
          {linkedIn && (
            <a
              style={linkStyles}
              href={linkedIn}
            >
              Connect with me on LinkedIn
            </a>
          )}
          <a
            style={{ ...linkStyles, ...lastLinkStyles }}
            href="https://sprucecreative.ca"
          >
            sprucecreative.ca
          </a>
          <img
            style={logoStyles}
            src="https://sprucecreative.ca/wp-content/uploads/2023/05/spruce-logo.png"
            alt="Spruce Creative"
          />
          <div style={{ height: "100px" }}></div>
        </div>
      ))}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Spruce Email Signatures</title>;
