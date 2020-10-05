import ContactCard from 'components/contactCard/contactCard';
import React from 'react';
import './contact.css';
import Avatar1 from 'assets/avatar1.jpg';
import Avatar2 from 'assets/avatar2.jpg';
import Avatar3 from 'assets/avatar3.jpg';
import {
  Form, Input, Button,
} from 'antd';
import { Fade } from 'react-awesome-reveal';

export default function Contact() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <section id="contact">
      <h3 className="contact__category">Contact</h3>
      <h3 className="contact__title">
        Nous contacter
      </h3>
      <div className="contact__content">
        <div className="contact__cards-container">
          <Fade cascade damping={0.1}>
            <ContactCard image={Avatar1} name="Vincent Chabredier" status="Chef de projet / Développeur Full Stack" tel="06 75 88 04 29" email="vincent@ouvrages-web.fr" />
            <ContactCard image={Avatar2} name="Michaël Witrant" status="Directeur technique / Admin Sys / Dév Full Stack" tel="06 00 00 00 00" email="michael@ouvrages-web.fr" />
            <ContactCard image={Avatar3} name="Florent Ferry" status="Développeur Full Stack" tel="06 00 00 00 00" email="florent@ouvrages-web.fr" />
          </Fade>
        </div>
        <Form
          className="contact__form"
          labelCol={layout.labelCol}
          wrapperCol={layout.wrapperCol}
          name="basic"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Nom"
            name="Nom"
            rules={[{ required: true, message: '' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Prénom"
            name="Prénom"
            rules={[{ required: true, message: '' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mail"
            name="Mail"
            rules={[{ required: true, message: '' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Message"
            name="Message"
            rules={[{ required: true, message: '' }]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item wrapperCol={tailLayout.wrapperCol}>
            <Button className="g__link-btn" type="link" htmlType="submit">
              Envoyer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
