import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  name: "",
  email: "",
  password: "",
  type: "",
  classGrade: "",
  language: "",
  subject: "",
  setUserNamePassword: (
    name,
    email,
    password,
    type,
    classGrade,
    language,
    subject
  ) => {},
});

export function AuthContextProvider(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState();
  const [classGrade, setClassGrade] = useState();
  const [language, setLanguage] = useState();
  const [subject, setSubject] = useState();

  function setUserNamePassword(
    name,
    email,
    password,
    type,
    classGrade,
    language,
    subject
  ) {
    setName(name);
    setEmail(email);
    setPassword(password);
    setType(type),
    setClassGrade(classGrade),
    setLanguage(language),
    setSubject(subject);
  }

  return (
    <AuthContext.Provider
      value={{
        name: name,
        email: email,
        password: password,
        type: type,
        classGrade:classGrade,
        language:language,
        subject:subject,
        setUserNamePassword: setUserNamePassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
