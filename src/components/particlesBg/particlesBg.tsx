import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config";
import styles from "./particlesBg.module.scss";

const ParticlesBg = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    return (
        <Particles
            id="tsparticles"
            className={styles.particlesBg}
            init={particlesInit}
            options={particlesConfig}
        />
    );
};

export default ParticlesBg;