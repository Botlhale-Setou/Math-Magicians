import React from 'react';
import Navbar from './navbar';
import './components.css';

const Home = () => (
  <div>
    <Navbar />
    <div className="homeBody">
      <h1>Welcome to our page!</h1>
      <p>
        Mathematics is an area of knowledge that includes the topics of numbers,
        formulas and related structures, shapes and the spaces in which they are
        contained, and quantities and their changes. These topics are
        represented in modern mathematics with the major subdisciplines of
        number theory, algebra, geometry, and analysis, respectively. There is
        no general consensus among mathematicians about a common definition for
        their academic discipline.
      </p>
      <p>
        Most mathematical activity involves the discovery of properties of
        abstract objects and the use of pure reason to prove them. These objects
        consist of either abstractions from nature or—in modern
        mathematics—entities that are stipulated to have certain properties,
        called axioms. A proof consists of a succession of applications of
        deductive rules to already established results. These results include
        previously proved theorems, axioms, and—in case of abstraction from
        nature—some basic properties that are considered true starting points of
        the theory under consideration.
      </p>
      <p>
        Mathematics is essential in the natural sciences, engineering, medicine,
        finance, computer science and the social sciences. Although mathematics
        is extensively used for modeling phenomena, the fundamental truths of
        mathematics are independent from any scientific experimentation. Some
        areas of mathematics, such as statistics and game theory, are developed
        in close correlation with their applications and are often grouped under
        applied mathematics. Other areas are developed independently from any
        application (and are therefore called pure mathematics), but often later
        find practical applications. The problem of integer factorization, for
        example, which goes back to Euclid in 300 BC, had no practical
        application before its use in the RSA cryptosystem, now widely used for
        the security of computer networks.
      </p>
      <p>
        Historically, the concept of a proof and its associated mathematical
        rigour first appeared in Greek mathematics, most notably in
        Euclid&apos;s Elements. Since its beginning, mathematics was
        essentially divided into geometry and arithmetic (the manipulation of
        natural numbers and fractions), until the 16th and 17th centuries, when
        algebra and infinitesimal calculus were introduced as new areas.
        Since then, the interaction between mathematical innovations and
        scientific discoveries has led to a rapid lockstep increase in the
        development of both. At the end of the 19th century, the foundational
        crisis of mathematics led to the systematization of the axiomatic
        method, which heralded a dramatic increase in the number of
        mathematical areas and their fields of application. The contemporary
        Mathematics Subject Classification lists more than 60 first-level areas
        of mathematics.
      </p>
      <p>- Wikipedia</p>
    </div>
  </div>
);

export default Home;
