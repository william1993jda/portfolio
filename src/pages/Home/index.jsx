
import axios from 'axios'

import {AsideInfo, ContainerHome, ContentHome, HeaderContentPerfil} from "./styled.module.jsx"

import SideBar from '../../components/SideBar'

import BioHome from '../../components/BioHome'

import Experience from '../../components/Experience'

import Education from '../../components/Education'

import apiGithub from '../../services/api'

import { useEffect, useState } from "react";



export default function Home() {
    const [userGitHub, setUserGitHub] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState('bio')

    useEffect(() => {
        const load = async () => {
            await apiGithub.get( '/users/william1993jda')
                .then((response) => {
                    setUserGitHub(response.data)
                    setLoading(false)
                })
                .catch ((error) => {
                    console.log(error)
                    setError(error)
                    setLoading(false)
                })
        }
        load()

    }, [])

    const updateState = (page) => {
        setPage(page);
    };

    return (
        <ContainerHome>
            <SideBar updateState={updateState} />
            <ContentHome>
                <HeaderContentPerfil>
                    {
                        error ? <p>Opss, aconteceu um erro...</p> : (
                            <>
                                <img src={userGitHub.avatar_url} alt={userGitHub.name} />
                                <div>
                                    <p>Perfil:</p>
                                    <h1>{userGitHub.name}</h1>
                                    <p>{userGitHub.bio}</p>
                                </div>
                            </>
                        )
                    }
                </HeaderContentPerfil>
                <AsideInfo>
                    {loading && <p>Carregando...</p>}
                    {
                        error ? <p>Ooops, aconteceu algum erro.</p> : (
                            <>
                                {page === 'bio' && <BioHome />}
                                {page === 'experience' && <Experience />}
                                {page === 'education' && <Education />}
                            </>
                        )
                    }
                </AsideInfo>
            </ContentHome>
        </ContainerHome>
    )
}