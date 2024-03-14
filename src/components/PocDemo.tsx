import { useState } from "react";
import PocInput from "./PocInput";
import PocSelect from "./PocSelect";
import PocInputWrapper from "./PocInputWrapper";
import PocButton from "./PocButton";
import PocFeedback from "./PocFeedback";
import PocBox from "./PocBox";

const PocDemo = () => {
  const emptyValidation = { state: "", field: "", message: "", key: "" };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [suffix, setSuffix] = useState(undefined);
  const [validation, setValidation] = useState(emptyValidation);

  const resetFields = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setSuffix(undefined);
    setValidation(emptyValidation);
  };

  const onClear = () => {
    resetFields();
    setValidation(emptyValidation);
  };

  const validateName = () => {
    return (
      fullName.length > 3 &&
      fullName.indexOf(" ") > 0 &&
      fullName.match(/^[a-zA-Z ]+$/)
    );
  };

  const validateEmail = () => {
    return (
      email.length > 6 &&
      email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi)
    );
  };

  const validatePhone = () => {
    return phone.length > 7 && phone.match(/^\d{3}-\d{3}-\d{4}/gi);
  };

  const validateForm = () => {
    let validName = validateName();
    let validEmail = validateEmail();
    let validPhone = validatePhone();
    let validSuffix = !!suffix;

    if (!validName && !validEmail && !validPhone && !validSuffix) {
      return {
        state: "error",
        field: "all",
        message: "Congratulations, you got EVERY field wrong!",
        key: new Date().getTime().toString(),
      };
    }

    if (!validName) {
      return {
        state: "error",
        field: "name",
        message: "Please enter the employee's full name",
        key: new Date().getTime().toString(),
      };
    }

    if (!validSuffix) {
      return {
        state: "error",
        field: "suffix",
        message: "Please pick a suffix",
        key: new Date().getTime().toString(),
      };
    }

    if (!validEmail) {
      return {
        state: "incomplete",
        field: "email",
        message: "Email should be formatted properly (like 'a@bc.com')",
        key: new Date().getTime().toString(),
      };
    }

    if (!validPhone) {
      return {
        state: "incomplete",
        field: "phone",
        message: "Phone should be composed of numbers (like '555-555-5555')",
        key: new Date().getTime().toString(),
      };
    }

    if (validName && validEmail && validPhone && validSuffix) {
      return {
        state: "valid",
        field: "",
        message: "Employee is valid and will be added...",
        key: new Date().getTime().toString(),
      };
    }

    return { ...emptyValidation, key: new Date().getTime().toString() };
  };

  const onAddEmployee = () => {
    setValidation(validateForm());
  };

  const hasContent = () => {
    return (
      fullName.length > 0 || email.length > 0 || phone.length > 0 || !!suffix
    );
  };

  return (
    <div style={{ margin: 40, width: 600 }}>
      <PocBox>
        <PocInputWrapper label="Full Name">
          <PocInput
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Employee Name"
            value={fullName}
            error={validation.field === "name"}
            helperText={
              validation.field === "name" ? "Valid name required" : ""
            }
          />
        </PocInputWrapper>
        <hr style={{ margin: "0px 0px 28px 0px" }} />
        <PocInputWrapper label="Suffix">
          <PocSelect
            value={suffix}
            onChange={(e) => {
              setSuffix(e.target.value);
            }}
            options={[
              { label: "Jr", value: 1 },
              { label: "Sr", value: 2 },
              { label: "III", value: 3 },
              { label: "IV", value: 4 },
            ]}
            error={validation.field === "suffix"}
            helperText={validation.field === "suffix" ? "Choose a suffix" : ""}
          />
        </PocInputWrapper>

        <PocInputWrapper label="Email">
          <PocInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email.com"
            value={email}
            error={validation.field === "email"}
            helperText={
              validation.field === "email" ? "Valid email required" : ""
            }
          />
        </PocInputWrapper>

        <PocInputWrapper label="Phone Number">
          <PocInput
            onChange={(e) => setPhone(e.target.value)}
            placeholder="555-555-5555"
            value={phone}
            error={validation.field === "phone"}
            helperText={
              validation.field === "phone" ? "Valid phone required" : ""
            }
          />
        </PocInputWrapper>

        <div style={{ textAlign: "right", marginRight: 2 }}>
          {validation?.state !== "valid" ? (
            <>
              <PocButton
                disabled={!hasContent()}
                variant="outlined"
                onClick={onClear}
              >
                Cancel
              </PocButton>

              <PocButton disabled={!hasContent()} onClick={onAddEmployee}>
                Add Employee
              </PocButton>
            </>
          ) : (
            <PocButton disabled={!hasContent()} onClick={() => resetFields()}>
              Reset Form
            </PocButton>
          )}
        </div>

        {validation?.state?.length > 1 && (
          <PocFeedback
            message={validation.message}
            type={validation.state}
            key={validation.key}
          />
        )}
      </PocBox>
    </div>
  );
};

export default PocDemo;
