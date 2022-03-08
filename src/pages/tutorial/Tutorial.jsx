import { Typography, Box, Paper, Link, Divider, Button } from '@mui/material/';
import { Item } from 'semantic-ui-react';
import { useRef, useState, useEffect } from 'react';
import TutorialMain from '../../components/main/Main';

export default function Tutorial() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  const resetHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  return (
    <TutorialMain>
      <Typography variant="h4">React Hook userRef()</Typography>
      <Typography variant="h6">Guia para userRef() e Refs em React</Typography>
      <div>
        <Paper
          elevation={8}
          sx={{
            margin: 2,
            padding: 2,
            backgroundColor: '#080D08',
            boxShadow:
              ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
          }}
        >
          <Item.Group style={{ padding: 25 }}>
            <Item
              style={{
                marginBottom: '0.5rem',
              }}
            >
              <Link
                sx={{
                  color: '#FBFBF2',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
                href="#hooks"
                underline="hover"
              >
                1. o que são hooks?
              </Link>
            </Item>
            <Item
              style={{
                marginBottom: '0.5rem',
              }}
            >
              <Link
                sx={{
                  color: '#FBFBF2',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  marginLeft: 5,
                }}
                href="#hooksDoReact"
                underline="hover"
              >
                1.1 Regras dos Hooks
              </Link>
            </Item>
            <Item
              style={{
                marginBottom: '0.5rem',
              }}
            >
              <Link
                sx={{
                  color: '#FBFBF2',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
                href="#useref"
                underline="hover"
              >
                2. useref()
              </Link>
            </Item>
            <Item
              style={{
                marginBottom: '0.5rem',
              }}
            >
              <Link
                sx={{
                  color: '#FBFBF2',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  marginLeft: 5,
                }}
                href="#usecase"
                underline="hover"
              >
                2.1 Caso de uso: implementando um cronômetro
              </Link>
            </Item>
            <Item
              style={{
                marginBottom: '0.5rem',
              }}
            >
              <Link
                sx={{
                  color: '#FBFBF2',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
                href="#conclusao"
                underline="hover"
              >
                Conclusão
              </Link>
            </Item>
          </Item.Group>
        </Paper>
      </div>
      <div id="hooks" style={{ margin: '0 30px' }}>
        <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '15px' }}>
          1. O que são Hooks?
        </Typography>
        <div style={{ margin: '0 30px' }}>
          <Typography>
            React Hooks foram adicionados ao React na versão 16.8. Com a transição de componentes de
            classe para funcionais, Hooks permitem que você use estado e outros recursos dentro de
            componentes funcionais, ou seja, sem escrever um componente de classe.
          </Typography>
          <Typography>
            Esse novo recurso fornece a componentes funcionais um estado interno e acesso ao próprio
            ciclo de vida através de uma forma mais direta, limpa e autocontida.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0' }}>
            <Box sx={{ width: '45%' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Lifecycle sem Hooks
              </Typography>
              <Typography>
                Da forma antiga, utilizando class components o acesso ao ciclo de vida (momento em
                que o componente é carregado, por exemplo) é fornecido através dos métodos chamados
                lifecycle methods, cuja execução ocorre dado um determinado ciclo de vida do
                componente, ou seja, sempre que há uma mudança todo componente era renderizado.
              </Typography>
            </Box>
            <Box sx={{ width: '45%' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Lifecycle com Hooks
              </Typography>
              <Typography>
                Em um componente funcional podemos, utilizando a função useEffect() fornecida pelo
                React, que recebe como parâmetro uma função callback e nela serão realizados os
                efeitos colaterais necessários pelo componente durante seu ciclo de vida.
              </Typography>
            </Box>
          </div>
          <div id="hooksDoReact" style={{ margin: '0 30px' }}>
            <Paper
              elevation={8}
              sx={{
                margin: 2,
                padding: 2,
                boxShadow:
                  ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
              }}
            >
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Regras dos Hooks
              </Typography>
              <Typography>
                Para utilizar os Hooks em componentes React é preciso seguir duas regras
                específicas, caso contrário, não há como garantir a integridade do recurso na
                aplicação:
              </Typography>
              <Typography>
                <span style={{ fontWeight: 'bold' }}> Chame os Hooks apenas no nível de cima:</span>{' '}
                nunca chame Hooks dentro de loops, estruturas condicionais ou funções callback
                aninhadas. Os Hooks devem ser chamados sempre no primeiro nível do componente ou
                função React em que eles serão utilizados. Isso se deve porque o React identifica os
                hooks de um componente pela ordem em que eles foram chamados. Seguindo essa regra,
                garantimos que os Hooks sejam chamados na mesma ordem sempre que o componente é
                renderizado, permitindo ao React preservar o estado dos Hooks apesar de múltiplas
                chamadas de useState e useEffect.
              </Typography>
              <Typography>
                <span style={{ fontWeight: 'bold' }}> Apenas chame Hooks em funções React:</span> Os
                Hooks devem sempre ser chamados dentro de um componente funcional React ou de um
                Hook customizado, geralmente extraído de um componente funcional React.
              </Typography>
            </Paper>
          </div>
        </div>
      </div>
      <Divider sx={{ margin: '30px 0' }} />
      <div id="useref" style={{ margin: '0 30px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
          UserRef()
        </Typography>
        <Typography>
          O useRef retorna um objeto ref mutável, no qual a propriedade .current é inicializada para
          o argumento passado (initialValue). O objeto retornado persistirá durante todo o ciclo de
          vida do componente.
        </Typography>
        <Paper
          elevation={8}
          sx={{
            margin: 2,
            padding: 5,
            color: '#FBFBF2',
            backgroundColor: '#080D08',
            boxShadow:
              ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
          }}
        >
          <code>
            <span style={{ color: '#c5a5c5' }}> function</span>
            <span style={{ color: '#79b6f2' }}> TextInputWithFocusButton</span>() {'{'}
            <br />
            <div style={{ marginLeft: '25px' }}>
              <span style={{ color: '#c5a5c5' }}> const</span> inputEl ={' '}
              <span style={{ color: '#79b6f2' }}>useRef</span>(
              <span style={{ color: '#c5a5c5' }}>null</span>);
              <br />
              <span style={{ color: '#c5a5c5' }}> const</span>{' '}
              <span style={{ color: '#79b6f2' }}>onButtonClick</span> = () => {'{'}
              <br />
              <div style={{ marginLeft: '20px' }}>
                inputEl.current.<span style={{ color: '#79b6f2' }}>focus</span>();
              </div>
              {'}'};<br />
              <span style={{ color: '#c5a5c5' }}> return </span>(<br />
              <div style={{ marginLeft: '20px' }}>
                {'<>'}
                <br />
                <div style={{ marginLeft: '25px' }}>
                  {'<'}input <span style={{ color: '#c5a5c5' }}>ref</span>={'{'} inputEl {'}'}
                  <span style={{ color: '#c5a5c5' }}> type</span>="text" />
                  <br />
                  {'<'}button<span style={{ color: '#c5a5c5' }}> onClick</span>={'{'}onButtonClick
                  {'}'}
                  >Focus no input{'<'}/button>
                  <br />
                </div>

                {'</>'}
                <br />
              </div>
              );
              <br />
            </div>
            {'}'}
          </code>
        </Paper>
        <Typography>
          Essencialmente, useRef é como uma “caixa” que pode conter um valor mutável em sua
          propriedade .current.
          <br />
          <br /> Você pode estar familiarizado com os refs principalmente como uma forma de acessar
          o DOM. Se você passar um objeto ref para React com {'<'}div ref = {'{'}
          myRef{'}'} />, React definirá sua propriedade .current para o nó DOM correspondente sempre
          que esse nó for alterado.
          <br />
          <br /> No entanto, useRef () é útil para mais do que o atributo ref. É útil para manter
          qualquer valor mutável em torno, semelhante a como você usaria campos de instância em
          classes.
          <br />
          <br /> Isso funciona porque useRef () cria um objeto JavaScript simples. A única diferença
          entre useRef () e a criação de um objeto {'{'}current: ...{'}'} é que useRef lhe dará o
          mesmo objeto ref em cada render.
          <br /> <br />
          Tenha em mente que o useRef não avisa quando o conteúdo é alterado. Mover a propriedade
          .current não causa uma nova renderização. Se você quiser executar algum código quando o
          React anexar ou desanexar um ref a um nó DOM, convém usar um callback ref.
        </Typography>
        <Divider sx={{ margin: '30px 0' }} />
        <div id="usecase" style={{ margin: '0 30px' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Caso de uso: implementando um cronômetro
          </Typography>
          <Typography sx={{ margin: '30px 0' }}>
            Você pode armazenar dentro de uma infraestrutura de referência dados de efeitos
            colaterais. Por exemplo, você pode armazenar em ponteiros de referência: IDs de timer,
            IDs de soquete, etc.
            <br />
            <br /> O componente<code> Stopwatch</code> utiliza
            <code> setInterval(callback, time)</code>a função de timer para aumentar a cada segundo
            o contador de um cronômetro. O ID do temporizador é armazenado em uma referência
            <code> timerIdRef:</code>
          </Typography>
          <Paper
            elevation={8}
            sx={{
              margin: 2,
              padding: 2,
              boxShadow:
                ' 0px 5px 5px -3px rgb(67 185 170 / 20%), 0px 8px 10px 1px rgb(67 185 170 / 14%), 0px 3px 14px 2px rgb(67 185 170 / 12%)',
            }}
          >
            <div>
              <iframe
                src="https://codesandbox.io/embed/nifty-benji-o1xkk2?fontsize=14&hidenavigation=1&theme=dark"
                style={{
                  width: '100%',
                  height: '500px',
                  border: 0,
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
                title="nifty-benji-o1xkk2"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
            <div>
              <div className="timer">Timer: {count}s</div>
              <div style={{ margin: '10px 0' }}>
                <Button onClick={startHandler} variant="outlined" color="success">
                  Start
                </Button>
                <Button onClick={stopHandler} variant="outlined" color="success">
                  Stop
                </Button>
                <Button onClick={resetHandler} variant="outlined" color="success">
                  Reset
                </Button>
              </div>
            </div>
            <Button
              href="https://codesandbox.io/s/nifty-benji-o1xkk2?file=/src/App.js"
              variant="outlined"
              color="success"
            >
              Teste mais no codesandbox!
            </Button>
          </Paper>
          <Typography sx={{ margin: '30px 0' }}>
            <code>startHandler()</code>A função, que é invocada quando o botão Iniciar é clicado,
            inicia o cronômetro e salva o ID do cronômetro na referência
            <code> timerIdRef.current = setInterval(...)</code>.
            <br /> <br />
            Para parar o cronômetro, o usuário clica no botão Parar . O manipulador do botão stop
            <code>stopHandler()</code> acessa o ID do cronômetro da referência e para o cronômetro
            <code> clearInterval(timerIdRef.current)</code>.
            <br />
            <br /> Além disso, se o componente desmontar com o cronômetro ativo, a função de reset
            <code> useEffect()</code> de também interromperá o cronômetro.
            <br />
            <br />
            No exemplo do cronômetro, a referência foi usada para armazenar os dados da
            infraestrutura — o ID do cronômetro ativo.
          </Typography>
        </div>
      </div>
      <Divider sx={{ margin: '30px 0' }} />
      <div id="#conclusao" style={{ margin: '0 30px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Conclusões
        </Typography>
        <Typography sx={{ margin: '30px 0' }}>
          O Hook<code> useRef</code> em aplicações exige cuidados. O<code> useRef</code> retorna um
          objeto ref mutável que possui uma propriedade<code> .current</code> que pode assumir
          qualquer valor, podendo ser elementos DOM ou do ato. Vimos dois usos para esse ref: poder
          acessar elementos DOM ou React e manter uma variável mutável que persiste durante toda a
          vida de um componente funcional e que se atualizado, não causa novas renderizações.
          <br /> <br /> Como última dica vale a pena seguir a documentação React:
          <Link
            sx={{
              color: '#8F938A',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginRight: 5,
            }}
            href="/references"
            underline="hover"
          >
            Não utilizar as alternativas😅
          </Link>
          .
        </Typography>
      </div>
    </TutorialMain>
  );
}
