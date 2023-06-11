import { FC } from "react";
import ParticlesBg from "../../components/particlesBg/particlesBg";
import Button from "../../components/ui/Button/Button";
import { IComponentWichClasses } from "../../shared/interfaces/IComponentWithClasses";
import styles from "./Homepage.module.scss";
import img from "../../assets/startscreen1.png";

import Typewriter from "typewriter-effect";

const Homepage: FC<IComponentWichClasses> = ({ classes }) => {
  return (
    <div className={styles.wrapper}>
      <ParticlesBg />
      <section className={`${classes || ""} ${styles.startScreen}`}>
        <div className={styles.startBox}>
          <div className={styles.titleBox}>
            <h3>Hello, My name is</h3>
            <h1>Zixail</h1>
            <h3>
              and{" "}
              <span>
                I'm&nbsp;
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome You")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("a React Developer")
                      .start();
                  }}
                />
              </span>
            </h3>
          </div>
          <p>
            .I'm a front-end developer with about 2 years of experience based in
            <br />
            Brest, Belarus. Turning ideas into real life products is my calling.
          </p>
          <Button>Hire Me</Button>
        </div>
        <div className={styles.homepageImg}>
          <img src={img} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
