import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      fluid
      style={{
        textAlign: "center",
        backgroundColor: "#f2f2f2",
        marginTop: "100px",
      }}
      className="d-flex flex-column"
    >
      <p style={{ marginBottom: "10px", fontSize: "14px" }}>
        © 2007 - 2023 Công Ty Cổ Phần xyz{" "}
      </p>
      <p style={{ marginBottom: "10px", fontSize: "14px" }}>
        Địa chỉ: xyz - HN - FPT / GPĐKKD số
        ********** .{" "}
      </p>
      <p style={{ marginBottom: "10px", fontSize: "14px" }}>
        GPĐKKD số ****** do Sở KHĐT TP.HCM cấp ngày 10/11/2023.{" "}
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>
        Chịu trách nhiệm nội dung: Vũ Hồng Minh.
      </p>
      <p style={{ margin: "4px 0 12px 0", fontSize: "14px" }}>
        Điện thoại:0839440702. Email: minhvhhe170320@fpt.edu.vn . Chịu trách nhiệm
        nội dung: Vũ Hồng Minh.
      </p>
    </Container>
  );
}
