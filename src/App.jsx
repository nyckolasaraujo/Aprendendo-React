import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from "./styles"



function App() {


  return (

    <Container>
      <TopBackground>

        <img />

      </TopBackground>


      <Form>

        <Title>Cadastrar Usuário</Title>


        <ContainerInputs>

          <div>
            <div>
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" />
            </div>

            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>
              <Input type="Number" placeholder="Idade do Usuário" />
            </div>
          </div>


          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do Usuário" />
          </div>

        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>


      </Form>


    </Container>


  )
}

export default App
