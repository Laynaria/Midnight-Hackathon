import NavbarLayout from "@components/layout/NavbarLayout";
import ProfileForm from "@components/Auth/ProfileForm";

import "@components/Auth/Profile.css";

export default function Profile() {
  return (
    <NavbarLayout>
      <main>
        <section className="profile-form">
          <h1>
            Pro<span>file</span>
          </h1>
          <ProfileForm />
        </section>
      </main>
    </NavbarLayout>
  );
}
