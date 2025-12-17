import logoExpressoUnix from "../../../../assets/LogoExpressoUnix.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";
import AdminFormCard from "./Components/AdminFormCard";
import WelcomePanel from "./Components/WelcomePanel";
import { AdminContext } from "../../../../infrastructure/context/AdminProvider";
import { validationsUtils } from "../../../../infrastructure/utils/validationsUtils";
import "./styles/AdminLogin.css";

export default function AdminLogin() {
  const { adminInfo } = useContext(AdminContext);
  const navigate = useNavigate();

  const [adminInfoInput, setAdminInfoInput] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (field, value) => {
    setAdminInfoInput(prev => ({
      ...prev,
      [field]: value,
    }));

    const validation = validationsUtils.validateField(field, value);

    setErrors(prev => ({
      ...prev,
      [field]: validation.valid ? "" : validation.message,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const fields = ["email", "password"];
    const newErrors = {};

    fields.forEach(field => {
      const validation =
        validationsUtils.validateField(field, adminInfoInput[field]) ||
        { valid: false, message: "Campo inválido" };

      if (!validation.valid) {
        newErrors[field] = validation.message;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    const isEqualLogin = isEqual(adminInfoInput, adminInfo);

    if (isEqualLogin) {
      navigate("/admin/manage-employees");
    } else {
      window.alert("Usuário não encontrado");
    }
  };

  return (
    <div id="admin-login">
      <section id="login-panel">
        <WelcomePanel logoExpressoUnix={logoExpressoUnix} />

        <AdminFormCard
          adminInfoInput={adminInfoInput}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
          errors={errors}
        />
      </section>
    </div>
  );
}
