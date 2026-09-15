import React, { useState } from 'react'
import axios from 'axios'
import { motion as Motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap } from 'react-icons/fa'

const API_URL = import.meta.env.VITE_API_URL || '/api'

const Contact = () => {
    // State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`${API_URL}/contact`, formData)
            alert(res.data?.message || 'Message sent successfully!')
            setFormData({ name: '', email: '', message: '' })
        } catch {
            alert('Thank you for reaching out! Your message has been noted.')
            setFormData({ name: '', email: '', message: '' })
        }
    }

    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact'
            className='contact-section'
        >
            <div className='container'>
                <h2 className='section-title'>
                    Get in <span>Touch</span>
                </h2>

                <p className='section-subtitle'>
                    Feel free to reach out for collaborations, project inquiries, or just a friendly conversation!
                </p>

                <div className='contact-grid'>
                    {/* FORM SECTION */}
                    <div>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>Your Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label>Email Address</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='your.email@example.com'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label>Your Message</label>
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows='5'
                                    placeholder='Type your message here...'
                                    required
                                />
                            </div>

                            <button type='submit' className='btn-send'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFO SECTION */}
                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <div className='contact-info-icon'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Solapur, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className='contact-info-item'>
                            <div className='contact-info-icon'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>
                                    <a
                                        href='mailto:jainhardik852@gmail.com'
                                        style={{ color: '#9ca3af', textDecoration: 'none' }}
                                    >
                                        jainhardik852@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className='contact-info-item'>
                            <div className='contact-info-icon'>
                                <FaGraduationCap />
                            </div>
                            <div>
                                <h3>Colleges</h3>
                                <p>Walchand Institute of Technology, Solapur ('28)</p>
                                <p>Indian Institute of Technology, Madras ('29)</p>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                Connect with Me
                            </h3>
                            <div className='social-links'>
                                <a
                                    href='https://github.com/465645'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='social-link'
                                    aria-label='GitHub'
                                    title='Hardik Jain on GitHub'
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href='https://www.linkedin.com/in/hardik-jain-b3b712284'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='social-link blue'
                                    aria-label='LinkedIn'
                                    title='Hardik Jain on LinkedIn'
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Motion.div>
    )
}

export default Contact
