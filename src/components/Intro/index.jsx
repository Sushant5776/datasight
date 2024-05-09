import { Space, Layout, Button } from "antd";
import Title from "antd/es/typography/Title";

export default function Intro() {
  return (
    <Layout style={{padding: '1rem', height: '100%', borderRadius: '1em', backgroundColor: 'skyblue'}}>
          <Space direction="vertical" size={'middle'} style={{display: 'flex', alignItems: 'center'}}>
            <Title level={2}>Welcome to Datasight!</Title>
            <p style={{color: 'CaptionText', fontSize: '1.5em', textAlign: 'center'}}>Unlock Business Potential with Datasight: Transforming Transactions into Insights.</p>
            <Button type="primary" size="large" style={{fontWeight: '500', backgroundColor: 'aquamarine', color: 'ButtonText'}}>Get Started</Button>
          </Space>
        </Layout>
  )
}