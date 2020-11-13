import React, { useState, useEffect } from 'react';
import { Wrapper, Card, Templates, Form, Button } from './styles';
import qs from 'qs';

export default function Home() {

    const [templates, setTemplates] = useState([]);
    const [selectTemplate, setSelectTemplate] = useState(null);
    const [boxes, setBoxes] = useState([]);
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const { data: { memes } } = await response.json();
            setTemplates(memes);
        })()
    }, []);

    const handleInputChange = (index) => (e) => {
        const newBoxes = boxes;
        newBoxes[index] = e.target.value;
        setBoxes(newBoxes);
    }

    function handleSelectedTemplate(template) {
        setSelectTemplate(template);
        setBoxes([]);
    }

    function handleReset() {
        setSelectTemplate(null);
        setBoxes([]);
        setMeme(null);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const params = qs.stringify({
            template_id: selectTemplate.id,
            username: 'manolocarvalho',
            password: '12345678',
            boxes: boxes.map(text => ({ text }))
        });

        const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`)
        const { data: { url } } = await resp.json();

        setMeme(url);

    }

    return (
        <Wrapper>
            <h1>Meme Generate</h1>

            <Card>
                {meme && (
                    <>
                        <img src={meme} alt="meme" />
                        <Button type="button" onClick={handleReset}>Criar outro Meme</Button>
                    </>
                )}
                {!meme && (
                    <>
                        <h2>Selecione um template</h2>
                        <Templates>
                            {templates.map(template => (
                                <button
                                    key={template.id}
                                    type="button"
                                    onClick={() => handleSelectedTemplate(template)}
                                    className={template.id === selectTemplate?.id ? 'selected' : ''}
                                >
                                    <img src={template.url} alt={template.name} />
                                </button>
                            ))}
                        </Templates>

                        {selectTemplate && (
                            <>
                                <h2>Textos</h2>

                                <Form onSubmit={handleSubmit}>

                                    {(new Array(selectTemplate.box_count)).fill('').map((_, index) => (
                                        <input
                                            key={String(Math.random())}
                                            placeholder={`Texto #${index + 1}`}
                                            onChange={handleInputChange(index)}
                                        />
                                    ))}

                                    <Button type="submit">Criar Meme</Button>
                                </Form>
                            </>
                        )}
                    </>
                )}
            </Card>
        </Wrapper>
    )

}