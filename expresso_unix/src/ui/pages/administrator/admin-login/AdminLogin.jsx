import logoExpressoUnix from "../../../../assets/LogoExpressoUnix.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";
import AdminFormCard from "./Components/AdminFormCard"
import WelcomePanel from "./Components/WelcomePanel"
import { AdminContext } from "../../../../infrastructure/context/AdminProvider"
import { validationsUtils } from "../../../../infrastructure/utils/validationsUtils";
import "./styles/AdminLogin.css";

export default function AdminLogin() {
  const { adminInfo, setAdminInfo } = useContext(AdminContext);
  const navigate = useNavigate();

  const adminInfoTeste = {
    email: "admin@email.com",
    password: "Dragon2023"
  }

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (field, value) => {
    setAdminInfo(prev => ({
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
        validationsUtils.validateField(field, adminInfo[field]) ||
        { valid: false, message: "Campo inválido" };

      if (!validation.valid) {
        newErrors[field] = validation.message;
      }
    });

    setErrors(newErrors);

    const isEqualLogin = isEqual(adminInfoTeste, adminInfo);

    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    console.log(adminInfoTeste, adminInfo)

    if (isEqualLogin) {
      navigate("/admin/manage-employees");
    } else {
      window.alert("Usuário não encontrado");
      return;
    }

  }

  return (
    <div id="admin-login">
      <section id="login-panel">
        <WelcomePanel
          logoExpressoUnix={logoExpressoUnix}
        />

        <AdminFormCard
        logoExpressoUnix={logoExpressoUnix}
          adminInfo={adminInfo}
          setAdminInfo={setAdminInfo}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
          errors={errors}
        />
      </section>
    </div>
  );
}

