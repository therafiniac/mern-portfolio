import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    password: "",
    message: "",
  });

  // handling input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/registration-img.jpg"
                  alt="Registration Images"
                  width={500}
                  height={500}
                />
                <div className="registration-form">
                  <h1 className="main-heading mb-3">Contact US</h1>
                  <br />

                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="email">email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        id="email"
                        required
                        autoComplete="off"
                        value={contact.email}
                        onChange={handleInput}
                      />
                    </div>

                    <div>
                      <label htmlFor="password">password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        id="password"
                        required
                        autoComplete="off"
                        value={contact.password}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor="message">message</label>
                      <input
                        name="message"
                        placeholder="enter your message"
                        id="message"
                        cols="30"
                        rows="10"
                        required
                        autoComplete="off"
                        value={contact.username}
                        onChange={handleInput}
                      />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-submit">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
