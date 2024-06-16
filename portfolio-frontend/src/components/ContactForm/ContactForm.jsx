import /* React, */ { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('O pedido foi enviado.');
                setFormData({ name: '', email: '', phone: '', message: '' }); // Limpa os campos do formulário
            } else {
                alert('O pedido falhou, tente novamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocorreu um erro. Por favor, tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 id="pedidos">Quer desenvolver um aplicativo, uma página web ou automações em python? Peça seu orçamento aqui.</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefone"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensagem"
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;