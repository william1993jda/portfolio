import {Link} from "react-router-dom";
import { Wrapper, Ul } from "./style.module.jsx";
import { FaLinkedin, FaGithub, FaSearch, FaTasks, FaUserGraduate } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar({ updateState }) {

    return (
        <aside>
            <Wrapper>
                <Ul>
                    <li>
                        <Link to='https://www.linkedin.com/in/william-jda/?originalSubdomain=br'>
                            <FaLinkedin />
                            Linkedin
                        </Link>
                    </li>
                    <li>
                        <Link to="https://github.com/william1993jda">
                            <FaGithub />
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => updateState('bio')}>
                            <FaSearch />
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => updateState('experience')}>
                            <FaTasks />
                            Experiência
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => updateState('education')}>
                            <FaUserGraduate />
                            Educação
                        </Link>
                    </li>
                </Ul>
            </Wrapper>
        </aside>
    )
}