import MainGrid   from "../src/components/MainGrid"
import Box        from "../src/components/Box"
import {AlurakutMenu, OrkutNostalgicIconSet} from "../src/Lib/AlurakutCommons"
import {ProfileRelationsBoxWrapper} from '../src/components/profileRelations'

function  ProfileSidebar(props) {
  return(
    <Box >
      <img src={`https://github.com/${props.githubUser}.png`} style = {{borderRadius: '8px' }} />
    </Box>
  )
}


export default function Home() {
  const githubUser = 'weverton-marcos-svg'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>

        <div className ="profileArea" style={{gridArea:'profileArea'}}>
          < ProfileSidebar githubUser={githubUser} />
        </div>
        
        <div className ="welcomeArea" style={{gridArea:'welcomeArea'}}>

          <Box className='title'>
            Bem-vindo(a)

            <OrkutNostalgicIconSet/>
          </Box>

        </div>

        <div className ="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>

          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          
          <Box >
             comunidade
          </Box>

        </div>

      </MainGrid>
    </>
  )
}
