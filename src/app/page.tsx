import Image from "next/image";
import {Layout, Button, Divider, Space} from 'antd'
import { Header, Content, Footer } from "antd/es/layout/layout";
import {Montserrat, ADLaM_Display} from 'next/font/google'
import Link from 'next/link'
import Text from 'antd/es/typography/Text'

const montserrat = Montserrat({weight: ['600', '900'], subsets: ['latin']})
const font = ADLaM_Display({weight: ['400'], subsets: ['adlam']})

export default function Home() {
  return (
    <Layout style={{minHeight: '100vh', maxWidth: '100vw', backgroundColor: 'white'}}>
      <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'inherit'}}>
        {/* <Image src="/next.svg" alt="Logo" width={64} height={64} /> */}
        <h1 style={{fontWeight: 'bolder', fontSize: '1.3rem', color: 'tomato', fontFamily: montserrat.style.fontFamily}}>Datasight</h1>
        <nav style={{marginLeft: 'auto'}}>
          <Link href="/about" style={{margin: '0', padding: '1em', fontWeight: '500'}}>About</Link>
          <Link href="/contact" style={{margin: '0', padding: '1em', fontWeight: '500'}}>Contact</Link>
          <Divider type="vertical" style={{margin: '0 1em', padding: '1em 0',}} />
          <Button type="link" style={{fontWeight: '500'}}>Log In</Button>
          <Button type="link" style={{fontWeight: '500'}}>Get Started</Button>
        </nav>
      </Header>
      <Content style={{padding: '1em'}}>
        <Layout style={{height: '16em', borderRadius: '1em', background: 'url(./bar_graph_medium.jpg)', backgroundBlendMode: 'lighten', backgroundPositionX: '50%', backgroundPositionY: '35.5%'}}>
          <Layout style={{padding: '1em', width: '100%', height: '16rem', borderRadius: '1em', background: 'transparent', backdropFilter: 'blur(0px)', display: 'flex', flexDirection: 'column', justifyContent: 'center',  }}>
            <Space direction="vertical" size={'middle'} style={{width: '50%', textAlign: 'center', margin: '0 2em 0 auto'}}>
              {/* old color 005165 */}
            <h2 style={{color: '#3DA459', fontSize: '2.25em', fontWeight: '700',}}>Welcome to <span style={{textDecorationLine: 'underline'}}>Datasight</span>!</h2>
            <Text type="secondary" style={{ fontSize: '1.5em', fontWeight: 500, textWrap: 'wrap'}}>Unlock Business Potential with Datasight: Transforming Transactions into Insights.</Text>

            </Space>
          </Layout>
        </Layout>
      </Content>
      <Footer style={{textAlign: 'center', backgroundColor: '#3DA459'}}>
        <Text strong={true} italic={true} style={{color: 'white'}}>All Rights Reserved - Datasight Pvt. Ltd.</Text>
      </Footer>
    </Layout>
  );
}
