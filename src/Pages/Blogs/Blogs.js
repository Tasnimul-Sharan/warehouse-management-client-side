import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container my-5">
      <h5>Frequently Asked Questions and Answers</h5>
      <div className="my-5">
        {/* <h1>blogs</h1> */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Difference between javascript and node js ?
            </Accordion.Header>
            <Accordion.Body>
              1. Javascript is a programming language that is used for writing
              scripts on the website.And NodeJS is a Javascript runtime
              environment. 2. Javascript can only be run in the browsers.And We
              can run Javascript outside the browser with the help of NodeJS. 3.
              It is basically used on the client-side. It is mostly used on the
              server-side. Javascript is capable enough to add HTML and play
              with the DOM. Nodejs does not have capability to add HTML tags. 5.
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox.And V8 is the Javascript engine inside
              of node.js that parses and runs Javascript. 6. Javascript is used
              in frontend development.And Nodejs is used in server-side
              development. 7. Some of the javascript frameworks are RamdaJS,
              TypedJS, etc. Some of the Nodejs modules are Lodash, express etc.
              These modules are to be imported from npm. 8. It is the upgraded
              version of ECMA script that uses Chrome’s V8 engine written in
              C++.And Nodejs is written in C, C++ and Javascript.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              When should you use node js and when should you use mongodb ?
            </Accordion.Header>
            <Accordion.Body>
              Node. js is primarily used for non-blocking, event-driven servers,
              due to its single-threaded nature. It's used for traditional web
              sites and back-end API services, but was designed with real-time,
              push-based architectures in mind. <br />
              NoSQL databases like MongoDB are a good choice when your data is
              document-centric and doesn’t fit well into the schema of a
              relational database, when you need to accommodate massive scale,
              when you are rapidly prototyping, and a few other use cases.
              MongoDB is the most popular of the new breed of non-relational
              NoSQL databases. Specifically, it’s a document database, also
              called a document-oriented database or a document store.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Difference between sql and nosql database ?
            </Accordion.Header>
            <Accordion.Body>
              1.SQL databases are primarily called as Relational Databases
              (RDBMS), whereas NoSQL database are primarily called as
              non-relational or distributed database.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is the purpose of jwt and how does it work ?
            </Accordion.Header>
            <Accordion.Body>
              JWT means JSON Web Token, it is an open standard used to share
              security information between two parties — a client and a server.
              Each JWT contains encoded JSON objects, including a set of claims.
              JWTs are signed using a cryptographic algorithm to ensure that the
              claims cannot be altered after the token is issued. <br />
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted. A
              JWT is a string made up of three parts, separated by dots (.), and
              serialized using base64. In the most common serialization format,
              compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:
              1.The header and the payload. 2.The signature. The JOSE (JSON
              Object Signing and Encryption) header contains the type of token —
              JWT in this case — and the signing algorithm. The payload contains
              the claims. This is displayed as a JSON string, usually containing
              no more than a dozen fields to keep the JWT compact. This
              information is typically used by the server to verify that the
              user has permission to perform the action they are requesting.
              There are no mandatory claims for a JWT, but overlaying standards
              may make claims mandatory. For example, when using JWT as bearer
              access token under OAuth2.0, iss, sub, aud, and exp must be
              present. some are more common than others. The signature ensures
              that the token hasn’t been altered. The party that creates the JWT
              signs the header and payload with a secret that is known to both
              the issuer and receiver, or with a private key known only to the
              sender. When the token is used, the receiving party verifies that
              the header and payload match the signature.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
