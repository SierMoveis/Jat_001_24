document.addEventListener("DOMContentLoaded", function () {
    
    const senhaArmazenada = "19577"; // Senha armazenada

    window.onload = function() {
        bloquearAcesso();
    };

    const toggleButton = document.getElementById("toggleButton");
    const frame = document.querySelector(".frame");

    let produtoSelecionado = null; // Variável para armazenar o produto selecionado

    toggleButton.addEventListener("click", () => {
        frame.classList.toggle("show");
        toggleButton.textContent = frame.classList.contains("show") ? "Hide" : "Instructions";
    });

    const titulos = [
        // Cadeiras, Banquetas, Poltrona, Puff e Luminária - índice inicial 0
        "Parte da frente",
        "Parte de trás",
        "Parte de baixo",
        "Produto",
        "Produto com proteção",

        // Mesas e aparador - índice inicial 5
            //tampos
        "Vista de cima",
        "Parte de baixo",
            //bases
        "Parte da frente",
        "Parte da frente",
        "Parte de baixo",
            //videos tampos ou estante
        "Produto",
        "Produto com proteção",
            //videos bases ou estante
        "Produto",
        "Produto com proteção",
            //videos estante
        "Produto",
        "Produto com proteção",

        // Buffet - índice inicial 16
        "Parte da frente",
        "Interior do produto",
        "Gavetas",
        "Parte de trás",

        // Mesa de jogos - índice inicial 20
        "Vista de cima",
        "Interior do produto",
        "Gavetas",
        "Parte da frente",
        "Parte da frente",
        "Parte de baixo",

        // Cachepot - índice inicial 26
        "Parte da frente",
        "Parte da frente",
        "Interior do produto",
        "Parte de baixo",
        "Gavetas",

        // Bancos, Mesa de apoio, Carrinho, Centro, Lateral - índice inicial 31
        "Parte da frente",
        "Parte da frente",
        "Parte de baixo",

        //Molduras e espelho - índice inicial 34
        "Parte da frente",
        "Parte da frente",
        "Parte de trás",
        "Gavetas",

        //Estante - índice inicial 38 
        "Parte da frente",
        "Interior do produto",
        "Parte de trás",
        "Prateleiras",
        "Painel",

        // CD - índice inicial 43
        "Centro de distribuição 1",
        "Centro de distribuição 2",
        "Centro de distribuição 3",

        //DC - índice inicial 46
        "Container vazio",
        "Doca de carregamento 1",
        "Doca de carregamento 2",
        "Doca de carregamento 3",
        "Doca de carregamento 4",
        "Selo",
        "Selo",
    ]

    const produtos = [   
        
    //Copiar o campo abaixo para acrescentar os produtos
        {
            nome: "MESA INFINIT",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/INFINITY.jpg",
                "",
                "",
                "imagens/unid_1/COLUNA INFINITY/1.jpg",
                "imagens/unid_1/COLUNA INFINITY/2.jpg"
            ],
            videos: [
                "imagens/unid_1/COLUNA INFINITY/4.mp4",
                ""
            ],
            dados: {
                ref: "12146",
                descricao: "COLUNA INFINIT",
                tecidoTela: "VD.INCOLORㅤ",
                cor: "CR.DMC",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA CANELAS SLIM MOEDA TPO MAD.",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/CANELAS-SLIM-MOEDA.jpg",
                "imagens/unid_1/CANELAS CAS 278/1.jpg",
                "",
                "imagens/unid_1/CANELAS CAS 278/3.jpg",
                "imagens/unid_1/CANELAS CAS 278/4.jpg"
            ],
            videos: [
                "imagens/unid_1/CANELAS CAS 278/5.mp4",
                "",
                "imagens/unid_1/CANELAS CAS 278/7.mp4"
            ],
            dados: {
                ref: "171184",
                descricao: "MESA CANELAS SLIM MOEDA TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "C.CAS./CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA DUCTO SLIM MOEDA TPO MAD. 2,40X1,20X0,76",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/DUCTO-SLIM-MOEDA.jpg",
                "imagens/unid_1/DUCTO 240 CAS/1.jpg",
                "",
                "imagens/unid_1/DUCTO 240 CAS/3.jpg",
                "imagens/unid_1/DUCTO 240 CAS/4.jpg"
            ],
            videos: [
                "imagens/unid_1/DUCTO 240 CAS/5.mp4",
                "imagens/unid_1/DUCTO 240 CAS/6.mp4",
                "imagens/unid_1/DUCTO 240 CAS/7.mp4"
            ],
            dados: {
                ref: "171358",
                descricao: "MESA DUCTO SLIM MOEDA TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "C.CAS./ CAS/LATAO",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA DUCTO SLIM MOEDA TPO MAD.  2,60X1,20X0,76",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/DUCTO-SLIM-MOEDA.jpg",
                "imagens/unid_1/DUCTO 260 CAS/1.jpg",
                "",
                "imagens/unid_1/DUCTO 240 CAS/3.jpg",
                "imagens/unid_1/DUCTO 240 CAS/4.jpg"
            ],
            videos: [
                "imagens/unid_1/DUCTO 240 CAS/5.mp4",
                "imagens/unid_1/DUCTO 240 CAS/6.mp4",
                "imagens/unid_1/DUCTO 260 CAS/7.mp4"
            ],
            dados: {
                ref: "171362",
                descricao: "MESA DUCTO SLIM MOEDA TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "C.CAS./CAS/LATAO",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA FRIBURGO SLIM MOEDA 2,40X1,20X0,76 TPO MAD.",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/FRIBURGO.jpg",
                "imagens/unid_1/FRIBURGO DMC/1.jpg",
                "imagens/unid_1/FRIBURGO DMC/2.jpg",
                ""
            ],
            videos: [
                "imagens/unid_1/FRIBURGO DMC/6.mp4",
                "imagens/unid_1/FRIBURGO DMC/7.mp4"
            ],
            dados: {
                ref: "187198",
                descricao: "MESA FRIBURGO SLIM MOEDA TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "CR.DMC F/DMC F",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA FRIBURGO SLIM MOEDA 2,78X1,20X0,76 TPO MAD.",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/FRIBURGO.jpg",
                "imagens/unid_1/FRIBURGO CAS/1.jpg",
                "",
                "imagens/unid_1/FRIBURGO CAS/3.jpg",
                "imagens/unid_1/FRIBURGO CAS/4.jpg"
            ],
            videos: [
                "imagens/unid_1/FRIBURGO CAS/5.mp4",
                "",
                "imagens/unid_1/FRIBURGO CAS/7.mp4"
            ],
            dados: {
                ref: "187214",
                descricao: "MESA FRIBURGO SLIM MOEDA TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "C.CAS./CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA LAGUNA SLIM MOEDA  TPO MAD.",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/LAGUNA-SLIM-MOEDA.jpg",
                "imagens/unid_1/LAGUNA/1.jpg",
                "",
                "imagens/unid_1/LAGUNA CAS/3.jpg",
                "imagens/unid_1/LAGUNA CAS/4.jpg"
            ],
            videos: [
                "imagens/unid_1/LAGUNA/5.mp4",
                "",
                "imagens/unid_1/LAGUNA CAS/7.mp4"
            ],
            dados: {
                ref: "103969",
                descricao: "MESA LAGUNA SLIM MOEDA TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "C.CAS./CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA MISSOURI SLIM MOEDA",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2024/05/MISSOURI-SLIM-MOEDA-scaled.jpg",
                "imagens/unid_1/MISSOURI CAS LC18/1.jpg",
                "",
                "imagens/unid_1/MISSOURI CAS LC18/3.jpg"
            ],
            videos: [
                "imagens/unid_1/MISSOURI CAS LC18/5.mp4",
                "imagens/unid_1/MISSOURI CAS LC18/6.mp4",
                "imagens/unid_1/MISSOURI CAS LC18/7.mp4"
            ],
            dados: {
                ref: "196719",
                descricao: "MESA MISSOURI SLIM MOEDA",
                tecidoTela: "ㅤ",
                cor: "LC18.SB/ C.CAS./VD.18",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA SAMARA SLIM MOEDA 3,00X1,20X0,76 TPO MAD.",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/SAMARA-SLIM-MOEDA.jpg",
                "imagens/unid_1/SAMARA CAS 3M/1.jpg",
                "",
                "imagens/unid_1/SAMARA CAS 3M/3.jpg",
                "imagens/unid_1/SAMARA CAS 3M/4.jpg"
            ],
            videos: [
                "imagens/unid_1/SAMARA CAS 3M/5.mp4",
                "imagens/unid_1/SAMARA CAS 3M/6.mp4",
                "imagens/unid_1/SAMARA CAS 3M/7.mp4"
            ],
            dados: {
                ref: "144702",
                descricao: "MESA SAMARA SLIM MOEDA TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "C.CAS./CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA SAMARA SLIM MOEDA 3,60X1,20X0,76 TPO MAD.BIPARTIDA",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2024/05/SAMARA-SLIM-MOEDA-GRANDES-FORMATOS-scaled.jpg",
                "imagens/unid_1/SAMARA DMC BIPARTIDA/1.jpg",
                "",
                "imagens/unid_1/SAMARA DMC BIPARTIDA/3.jpg"
            ],
            videos: [
                "imagens/unid_1/SAMARA DMC BIPARTIDA/5.mp4",
                "",
                "imagens/unid_1/SAMARA DMC BIPARTIDA/7.mp4"
            ],
            dados: {
                ref: "192979",
                descricao: "MESA SAMARA SLIM MOEDA TPO MAD.BIPARTIDA",
                tecidoTela: "ㅤ",
                cor: "CR.DMC F/DMC F",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA SAMARA SLIM MOEDA 3,60X1,20X0,76 TPO MAD.BIPARTIDA",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2024/05/SAMARA-SLIM-MOEDA-GRANDES-FORMATOS-scaled.jpg",
                "",
                "",
                "imagens/unid_1/SAMARA CAS BIPARTIDA/3.jpg",
                "imagens/unid_1/SAMARA CAS BIPARTIDA/4.jpg"
            ],
            videos: [
                "imagens/unid_1/SAMARA CAS BIPARTIDA/5.mp4",
                "",
                "imagens/unid_1/SAMARA CAS BIPARTIDA/7.mp4"
            ],
            dados: {
                ref: "192979",
                descricao: "MESA SAMARA SLIM MOEDA TPO MAD.BIPARTIDA",
                tecidoTela: "ㅤ",
                cor: "C.CAS./CAS ",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA SAMARA SLIM MOEDA ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/SAMARA-SLIM-MOEDA.jpg",
                "imagens/unid_1/SAMARA CAS LC18/1.jpg",
                "",
                "imagens/unid_1/SAMARA CAS LC18/3.jpg"
            ],
            videos: [
                "imagens/unid_1/SAMARA CAS 3M/5.mp4",
                "imagens/unid_1/SAMARA CAS 3M/6.mp4",
                "imagens/unid_1/SAMARA CAS LC18/7.mp4"
            ],
            dados: {
                ref: "144661",
                descricao: "MESA SAMARA SLIM MOEDA ",
                tecidoTela: "ㅤ",
                cor: "LC.18.SB/ CAS F/VD.18",
                observacao: "ㅤ"
            }
        },
        {
            nome: "BANCO APRIL PLUS",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/APRIL.jpg",
                "imagens/unid_2/APRIL 3353/1.jpg",
                "imagens/unid_2/APRIL 3353/2.jpg",
                ""
            ],
            videos: [
                "imagens/unid_2/APRIL 3353/4.mp4",
                "imagens/unid_2/APRIL 3353/5.mp4"
            ],
            dados: {
                ref: "124266",
                descricao: "BANCO APRIL PLUS",
                tecidoTela: "NAT./MT06 SBㅤ",
                cor: "3353/C.5308",
                observacao: "ㅤ"
            }
        },
        {
            nome: "BANCO FARO",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/FARO.jpg",
                "imagens/unid_2/BANCO FARO 1316/1.jpg",
                ""
            ],
            videos: [
                "imagens/unid_2/BANCO FARO 1316/4.mp4",
                "imagens/unid_2/BANCO FARO 1316/5.mp4"
            ],
            dados: {
                ref: "144456",
                descricao: "BANCO FARO",
                tecidoTela: "1316ㅤ",
                cor: "C.CAS./MT06 SB",
                observacao: "ㅤ"
            }
        },
        {
            nome: "BANCO FARO",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/FARO.jpg",
                "imagens/unid_2/BANCO FARO 3353 MT06/1.jpg",
                "imagens/unid_2/BANCO FARO 3353 MT06/2.jpg",
                "imagens/unid_2/BANCO FARO 3353 MT06/3.jpg"
            ],
            videos: [
                "imagens/unid_2/BANCO FARO 3353 MT06/4.mp4",
                "imagens/unid_2/BANCO FARO 3353 MT06/5.mp4"
            ],
            dados: {
                ref: "144456",
                descricao: "BANCO FARO",
                tecidoTela: "3353ㅤ",
                cor: "C.CAS./MT06 SB",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CENTRO PLANA 2023",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/PLANA-5.jpg",
                "imagens/unid_1/CENTRO PLANA CAS MT06/1.jpg",
                "imagens/unid_1/CENTRO PLANA CAS MT06/2.jpg",
                ""
            ],
            videos: [
                "imagens/unid_1/CENTRO PLANA CAS MT06/4.mp4",
                ""
            ],
            dados: {
                ref: "200715",
                descricao: "MESA CENTRO PLANA 2023",
                tecidoTela: "ㅤ",
                cor: "C.CAS./ C.CAS./MT06 SB",
                observacao: "ㅤ"
            }
        },
        {
            nome: "POLTRONA BLANCA ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2024/05/BLANCA-scaled.jpg",
                "imagens/unid_2/POLT BLANCA 3353/1.jpg",
                "imagens/unid_2/POLT BLANCA 3353/2.jpg",
                "imagens/unid_2/POLT BLANCA 3353/3.jpg"
            ],
            videos: [
                "imagens/unid_2/POLT BLANCA 3353/4.mp4",
                ""
            ],
            dados: {
                ref: "219089",
                descricao: "POLTRONA BLANCA ",
                tecidoTela: "CASㅤ",
                cor: "3353/3353",
                observacao: "ㅤ"
            }
        },
        {
            nome: "POLTRONA PALMIRA PLUS C/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/PALMIRA-PLUS.jpg",
                "imagens/unid_2/PALMIRA CAS 3353/1.jpg",
                "imagens/unid_2/PALMIRA CAS 3353/2.jpg",
                ""
            ],
            videos: [
                "imagens/unid_2/PALMIRA CAS 3353/4.mp4",
                "imagens/unid_2/PALMIRA CAS 3353/5.mp4"
            ],
            dados: {
                ref: "124104",
                descricao: "POLTRONA PALMIRA PLUS C/B",
                tecidoTela: "3353/C.5308ㅤ",
                cor: "CAS/LATAO",
                observacao: "ㅤ"
            }
        },
        {
            nome: "PUFF DRONE ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/DRONE.jpg",
                "imagens/unid_2/PUFF DRONE 3353 MT06/1.jpg",
                "imagens/unid_2/PUFF DRONE 3353 MT06/2.jpg",
                "imagens/unid_2/PUFF DRONE 3353 MT06/3.jpg"
            ],
            videos: [
                "imagens/unid_2/PUFF DRONE 3353 MT06/4.mp4",
                "imagens/unid_2/PUFF DRONE 3353 MT06/5.mp4"
            ],
            dados: {
                ref: "122908",
                descricao: "PUFF DRONE ",
                tecidoTela: "3353/C.5308ㅤ",
                cor: "NAT./MT06 SB",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA BLANCA S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2024/04/BLANCA-scaled.jpg",
                "imagens/unid_2/BLANCA CAS 3353/1.jpg",
                "imagens/unid_2/BLANCA CAS 3353/2.jpg",
                "imagens/unid_2/BLANCA CAS 3353/3.jpg"
            ],
            videos: [
                "imagens/unid_2/BLANCA CAS 3353/4.mp4",
                "imagens/unid_2/BLANCA CAS 3353/5.mp4"
            ],
            dados: {
                ref: "215182",
                descricao: "CADEIRA BLANCA S/B",
                tecidoTela: "3353/3353ㅤ",
                cor: "CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CENTRO MATTER",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "https://siermoveis.com.br/wp-content/uploads/2023/05/MATTER-2.jpg",
                "imagens/unid_1/SOFA TABLE MATTER/1.jpg",
                "imagens/unid_1/SOFA TABLE MATTER/2.jpg",
                ""
            ],
            videos: [
                "imagens/unid_1/SOFA TABLE MATTER/4.mp4",
                ""
            ],
            dados: {
                ref: "123430",
                descricao: "SOFA TABLE MATTER",
                tecidoTela: "ㅤ",
                cor: "C.CAS./MT06 SB",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA BETH 03 2024 S/B ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/BETH 03 ISO F.jpg",
                "imagens/unid_2/BETH 03 3342/1.jpg",
                "imagens/unid_2/BETH 03 3342/2.jpg",
                "imagens/unid_2/BETH 03 3342/3.jpg"
            ],
            videos: [
                "imagens/unid_2/BETH 03 3342/4.mp4",
                "imagens/unid_2/BETH 03 3342/5.mp4"
            ],
            dados: {
                ref: "218840",
                descricao: "CADEIRA BETH 03 2024 S/B ",
                tecidoTela: "3342ㅤ",
                cor: "CI.CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA BETH 2024 S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/BETH ESTOFADA ISO F.jpg",
                "imagens/unid_2/BETH 3343/1.jpg",
                "imagens/unid_2/BETH 3343/2.jpg",
                "imagens/unid_2/BETH 3343/3.jpg"
            ],
            videos: [
                "imagens/unid_2/BETH 3343/4.mp4",
                "imagens/unid_2/BETH 3343/5.mp4"
            ],
            dados: {
                ref: "218844",
                descricao: "CADEIRA BETH 2024 S/B",
                tecidoTela: "3343/3343ㅤ",
                cor: "CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA BETH 2024 ENC.TELA S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/BETH TELA ISO F.jpg",
                "imagens/unid_2/BETH TELA 3343/1.jpg",
                "imagens/unid_2/BETH TELA 3343/2.jpg",
                "imagens/unid_2/BETH TELA 3343/3.jpg"
            ],
            videos: [
                "imagens/unid_2/BETH TELA 3343/4.mp4",
                "imagens/unid_2/BETH TELA 3343/5.mp4"
            ],
            dados: {
                ref: "218836",
                descricao: "CADEIRA BETH 2024 ENC.TELA S/B",
                tecidoTela: "TL.NOG-01 -01/3343ㅤ",
                cor: "CI.CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA CLAUDIA 03 S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/CLAUDIA 03 ISO F.jpg",
                "imagens/unid_2/CLAUDIA 03 3351/1.jpg",
                "imagens/unid_2/CLAUDIA 03 3351/2.jpg",
                "imagens/unid_2/CLAUDIA 03 3351/3.jpg"
            ],
            videos: [
                "imagens/unid_2/CLAUDIA 03 3351/4.mp4",
                ""
            ],
            dados: {
                ref: "218819",
                descricao: "CADEIRA CLAUDIA 03 S/B",
                tecidoTela: "3351ㅤ",
                cor: "CI.CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA CLAUDIA S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/CLÁUDIA ESTOFADA ISO F.jpg",
                "imagens/unid_2/CLAUDIA 3358/1.jpg",
                "imagens/unid_2/CLAUDIA 3358/2.jpg",
                "imagens/unid_2/CLAUDIA 3358/3.jpg"
            ],
            videos: [
                "imagens/unid_2/CLAUDIA 3358/4.mp4",
                ""
            ],
            dados: {
                ref: "218528",
                descricao: "CADEIRA CLAUDIA S/B",
                tecidoTela: "3358/3358ㅤ",
                cor: "CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA CLAUDIA 03 S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/CLAUDIA 03 ISO F.jpg",
                "imagens/unid_2/CLAUDIA 03 3342/1.jpg",
                "imagens/unid_2/CLAUDIA 03 3342/2.jpg",
                "imagens/unid_2/CLAUDIA 03 3342/3.jpg"
            ],
            videos: [
                "imagens/unid_2/CLAUDIA 03 3342/4.mp4",
                "imagens/unid_2/CLAUDIA 03 3342/5.mp4"
            ],
            dados: {
                ref: "218819",
                descricao: "CADEIRA CLAUDIA 03 S/B",
                tecidoTela: "3342ㅤ",
                cor: "CI.CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA LARISSA 2024 ENC.TELA S/B ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/LARISSA TELA SEM BRAÇO ISO F.jpg",
                "imagens/unid_2/LARISSA TELA CAS 3341/1.jpg",
                "imagens/unid_2/LARISSA TELA CAS 3341/2.jpg",
                "imagens/unid_2/LARISSA TELA CAS 3341/3.jpg"
            ],
            videos: [
                "imagens/unid_2/LARISSA TELA CAS 3341/4.mp4",
                "imagens/unid_2/LARISSA TELA CAS 3341/5.mp4"
            ],
            dados: {
                ref: "218849",
                descricao: "CADEIRA LARISSA 2024 ENC.TELA S/B ",
                tecidoTela: "TL.NOG-01 -01/3341ㅤ",
                cor: "CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA LARISSA 2024 ENC.TELA S/B ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/LARISSA TELA SEM BRAÇO ISO F.jpg",
                "imagens/unid_2/LARISSA TELA 3343/1.jpg",
                "imagens/unid_2/LARISSA TELA 3343/2.jpg",
                "imagens/unid_2/LARISSA TELA 3343/3.jpg"
            ],
            videos: [
                "imagens/unid_2/LARISSA TELA 3343/4.mp4",
                "imagens/unid_2/LARISSA TELA CAS 3341/5.mp4"
            ],
            dados: {
                ref: "218849",
                descricao: "CADEIRA LARISSA 2024 ENC.TELA S/B ",
                tecidoTela: "TL.NOG-01 -01/3343ㅤ",
                cor: "CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA LUCIA 02 S/B ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/LÚCIA 02 ISO F.jpg",
                "imagens/unid_2/LUCIA 02 3295/1.jpg",
                "imagens/unid_2/LUCIA 02 3295/2.jpg",
                "imagens/unid_2/LUCIA 02 3295/3.jpg"
            ],
            videos: [
                "imagens/unid_2/LUCIA 02 3295/4.mp4",
                "imagens/unid_2/LUCIA 02 3295/5.mp4"
            ],
            dados: {
                ref: "219496",
                descricao: "CADEIRA LUCIA 02 S/B ",
                tecidoTela: "3295/3295ㅤ",
                cor: "CI.CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA LUCIA 02 S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/LÚCIA 02 ISO F.jpg",
                "imagens/unid_2/LUCIA 02 3341/1.jpg",
                "imagens/unid_2/LUCIA 02 3341/2.jpg",
                "imagens/unid_2/LUCIA 02 3341/3.jpg"
            ],
            videos: [
                "imagens/unid_2/LUCIA 02 3341/4.mp4",
                ""
            ],
            dados: {
                ref: "219496",
                descricao: "CADEIRA LUCIA 02 S/B",
                tecidoTela: "3341/3341ㅤ",
                cor: "CI.CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "CADEIRA LUCIA S/B",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/LÚCIA ESTOFADA ISO F.jpg",
                "imagens/unid_2/LUCIA 3295/1.jpg",
                "imagens/unid_2/LUCIA 3295/2.jpg",
                "imagens/unid_2/LUCIA 3295/3.jpg"
            ],
            videos: [
                "imagens/unid_2/LUCIA 3295/4.mp4",
                ""
            ],
            dados: {
                ref: "218572",
                descricao: "CADEIRA LUCIA S/B",
                tecidoTela: "3295/3295ㅤ",
                cor: "CAS",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA HOLANDA MOEDA ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/HOLANDA.jpg",
                "imagens/unid_1/HOLANDA LC 18 MT06/1.jpg",
                "imagens/unid_1/HOLANDA LC 18 MT06/2.jpg",
                "imagens/unid_1/HOLANDA LC 18 MT06/3.jpg",
                "imagens/unid_1/HOLANDA LC 18 MT06/4.jpg"
            ],
            videos: [
                "imagens/unid_1/HOLANDA LC 18 MT06/5.mp4",
                "imagens/unid_1/HOLANDA LC 18 MT06/6.mp4",
                "imagens/unid_1/HOLANDA LC 18 MT06/7.mp4"
            ],
            dados: {
                ref: "218422",
                descricao: "MESA HOLANDA MOEDA ",
                tecidoTela: "ㅤ",
                cor: "LC.18SB/ MT06 SB/ VD.18",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA MARTE MOEDA ",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/MARTE.jpg",
                "imagens/unid_1/MARTE LC18 CAS/1.jpg",
                "imagens/unid_1/MARTE LC18 CAS/2.jpg",
                "imagens/unid_1/MARTE LC18 CAS/3.jpg",
                "imagens/unid_1/MARTE LC18 CAS/4.jpg"
            ],
            videos: [
                "imagens/unid_1/MARTE LC18 CAS/5.mp4",
                "imagens/unid_1/MARTE LC18 CAS/6.mp4",
                "imagens/unid_1/MARTE LC18 CAS/7.mp4"
            ],
            dados: {
                ref: "171668",
                descricao: "MESA MARTE MOEDA 1,80X1,00X0,76 ",
                tecidoTela: "ㅤ",
                cor: "LC.18.SB/ CI.CAS.F/ VD.18",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA MARTE MOEDA 1,80X1,00X0,76 MAD.",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/MARTE.jpg",
                "imagens/unid_1/MARTE CICAS 180/1.jpg",
                "",
                "imagens/unid_1/MARTE CICAS 180/3.jpg",
                "imagens/unid_1/MARTE CICAS 180/4.jpg"
            ],
            videos: [
                "imagens/unid_1/MARTE CICAS 180/5.mp4",
                "imagens/unid_1/MARTE LC18 CAS/6.mp4",
                "imagens/unid_1/MARTE CICAS 180/7.mp4"
            ],
            dados: {
                ref: "171650",
                descricao: "MESA MARTE MOEDA MAD.",
                tecidoTela: "ㅤ",
                cor: "CI.CAS.F/ CI.CAS.F",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA SUIÇA",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/SUIÇA.jpg",
                "imagens/unid_1/SUIÇA DMC VD18 MT06/1.jpg",
                "imagens/unid_1/SUIÇA DMC VD18 MT06/2.jpg",
                "imagens/unid_1/SUIÇA DMC VD18 MT06/3.jpg"
            ],
            videos: [
                "imagens/unid_1/SUIÇA DMC VD18 MT06/5.mp4",
                "",
                "imagens/unid_1/SUIÇA DMC VD18 MT06/7.mp4"
            ],
            dados: {
                ref: "218504",
                descricao: "MESA SUIÇA",
                tecidoTela: "ㅤ",
                cor: "CR.DMC/ MT.06 SB/ VD.18",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA YORK",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/YORK.jpg",
                "imagens/unid_1/YORK LC 18 180 CAS/1.jpg",
                "",
                "imagens/unid_1/YORK LC 18 180 CAS/3.jpg",
                "imagens/unid_1/YORK LC 18 180 CAS/4.jpg"
            ],
            videos: [
                "imagens/unid_1/YORK LC 18 180 CAS/5.mp4",
                "imagens/unid_1/YORK LC 18 180 CAS/6.mp4",
                "imagens/unid_1/YORK LC 18 180 CAS/7.mp4"
            ],
            dados: {
                ref: "218497",
                descricao: "MESA YORK ",
                tecidoTela: "ㅤ",
                cor: "LC.18.SB/ CAS F/VD.18",
                observacao: "ㅤ"
            }
        },
        {
            nome: "MESA YORK TPO MAD.",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/YORK.jpg",
                "imagens/unid_1/YORK 219 CAS/1.jpg",
                "",
                "imagens/unid_1/YORK LC 18 180 CAS/3.jpg",
                "imagens/unid_1/YORK LC 18 180 CAS/4.jpg"
            ],
            videos: [
                "imagens/unid_1/YORK LC 18 180 CAS/5.mp4",
                "imagens/unid_1/YORK LC 18 180 CAS/6.mp4",
                "imagens/unid_1/YORK 219 CAS/7.mp4"
            ],
            dados: {
                ref: "218427",
                descricao: "MESA YORK TPO MAD.",
                tecidoTela: "ㅤ",
                cor: "CI.CAS.F/ CAS F",
                observacao: "ㅤ"
            }
        },
        // Centro de Distribuição
        {
            nome: "Centro de distribuição",
            imagens: [
                "imagens/cd/cd_capa.jpg",
                "imagens/cd/WhatsApp Image 2024-10-17 at 16.43.57 (1).jpeg",
                "imagens/cd/WhatsApp Image 2024-10-17 at 16.43.57.jpeg",
                "imagens/cd/WhatsApp Image 2024-10-17 at 16.44.00.jpeg"
            ],
            videos: [
                
            ],
            dados: {
                descricao: "Centro de distribuição"
            }
        },
        
        // Carregamento
        {
            nome: "Doca de carregamento",
            imagens: [
                "imagens/carregamento/dc_capa.jpg",
                "imagens/carregamento/1.jpeg",
                "imagens/carregamento/2.jpeg",
                "imagens/carregamento/3.jpeg",
                "imagens/carregamento/4.jpeg",
                "imagens/carregamento/5.jpeg",
                "imagens/carregamento/6.jpeg",
                "imagens/carregamento/7.jpeg"
            ],
            videos: [
                
            ],
            dados: {
                descricao: "Doca de carregamento"
            }
        }  
    ];

    // Exibição dos produtos

    const menu = document.getElementById("menu");
    const menuNota = document.getElementById("menu_nota");
    const detalhesContainer = document.querySelector(".container_detalhes");
    
    function exibirDetalhes(produto) {
        menu.style.display = "none";
        menuNota.style.display = "none"; 

        detalhesContainer.innerHTML = `
        <div class="detalhes">
            <div class="detalhes-container">

                <h2 tabindex="0" class="titulo">Description: ${produto.dados.descricao}</h2>

                ${
                    // Verificar todas as imagens não vazias e adicionar elementos HTML correspondentes
                    produto.imagens.slice(1).map((imagem, index) => {
                        if (imagem.trim() !== "") {
                            let tituloIndex;
                            if (produto.nome.includes("MESA")) {
                                tituloIndex = index + 5;
                            } else if (produto.nome.includes("BUFFET")) {
                                tituloIndex = index + 16;
                            } else if (produto.nome.includes("JOGOS")) {
                                tituloIndex = index + 20;
                            } else if (produto.nome.includes("CACHEPOT")) {
                                tituloIndex = index + 26;
                            } else if (produto.nome.includes("APOIO") || produto.nome.includes("CARRINHO") || produto.nome.includes("BANCO")
                                || produto.nome.includes("LATERAL") || produto.nome.includes("CENTRO") || produto.nome.includes("REVISTEIRO")) {
                                tituloIndex = index + 31;
                            } else if (produto.nome.includes("ESPELHO") || produto.nome.includes("MOLDURA")) {
                                tituloIndex = index + 34;
                            } else if (produto.nome.includes("ESTANTE")) {
                                tituloIndex = index + 38;
                            } else if (produto.nome === "Centro de distribuição") {
                                tituloIndex = index + 43;
                            } else if (produto.nome === "Doca de carregamento") {
                                tituloIndex = index + 46;
                            } else {
                                tituloIndex = index;
                            }
                            return `
                                <h3>${titulos[tituloIndex]}</h3>
                                <img src="${imagem}" alt="${produto.nome}">
                            `;
                        }
                        return ""; // Retorna uma string vazia se a imagem estiver vazia
                    }).join("")
                }

                
                    
                ${
                    // Verificar todos os vídeos não vazios e adicionar elementos HTML correspondentes
                    produto.videos.map((video, index) => {
                        if (video.trim() !== "") {
                            let tituloIndex;
                            if (produto.nome !== "Centro de distribuição" && produto.nome !== "Doca de carregamento") {
                                if (produto.nome.includes("CADEIRA") || produto.nome.includes("BANCO") || produto.nome.includes("POLTRONA")
                                    || produto.nome.includes("BANQUETA") || produto.nome.includes("PUFF") || produto.nome.includes("LUMINARIA")
                                    || produto.nome.includes("MOLDURA") || produto.nome.includes("APOIO") || produto.nome.includes("CARRNHO")
                                    || produto.nome.includes("LATERAL") || produto.nome.includes("BUFFET")
                                    || produto.nome.includes("REVISTEIRO")) {
                                    tituloIndex = index + 3;
                                } else if (produto.nome.includes("MESA") || produto.nome.includes("ESTANTE")
                                    || produto.nome.includes("JOGOS") || produto.nome.includes("CENTRO") 
                                    || produto.nome.includes("CACHEPOT")) {
                                    tituloIndex = index + 10;
                                }
                                return `
                                    <h3>${titulos[tituloIndex]}</h3>
                                    <video controls>
                                        <source src="${video}" type="video/mp4">
                                        Seu navegador não suporta o elemento de vídeo.
                                    </video>
                                `;
                            }
                        }
                        return ""; // Retorna uma string vazia se o vídeo estiver vazio
                    }).join("")
                }
            
                <div class="container-voltar">
                    <button class="botao-voltar">Back to menu</button>
                </div>
            </div>
        </div>
        `;

        const botaoVoltar = detalhesContainer.querySelector(".botao-voltar");
        botaoVoltar.addEventListener("click", () => voltarAoMenu());

        const tituloH2 = detalhesContainer.querySelector(".titulo");

            if (tituloH2) 
                tituloH2.focus();
    }

    const exibir_tela = document.getElementById("exibir_tela");
    
    function bloquearAcesso() {
        let acesso = false; // Inicialmente definido como falso

        while (!acesso) { // Continua enquanto o acesso for falso
            let senhaDigitada = prompt("Please, enter your password to access.");

            if (senhaDigitada === senhaArmazenada) {
                acesso = true; // Define como verdadeiro para sair do loop
                exibir_tela.style.display = "block"
            } else {
                // Senha incorreta, exibe mensagem de erro e continua o loop
                alert("Incorrect password. Please try again.");
            }
        }
    }

    function voltarAoMenu() {
        detalhesContainer.innerHTML = ""; // Limpar os detalhes exibidos
        menu.style.display = "flex";
        menuNota.style.display = "flex"; 
        if (produtoSelecionado) {
            produtoSelecionado.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function criarProduto(produto) {
        const divProduto = document.createElement("div");
        divProduto.classList.add("produto");

        const container = document.createElement("div");
        container.classList.add("produto-container");

        const img = document.createElement("img");
        
        img.src = produto.imagens[0];
        img.alt = produto.nome;
        img.classList.add("produto-imagem");
        img.addEventListener("click", () => {

            exibirDetalhes(produto);
                img.classList.add("produto-visto");
                innerHTML="";
                produtoSelecionado = img; // Armazena o produto selecionado
            });

        const tabela = document.createElement("table");
        tabela.classList.add("lista");
            tabela.innerHTML = `
            <tr>
                <th>Ref</th>
                <td>${produto.dados.ref}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>${produto.dados.descricao}</td>
            </tr>
            <tr>
                <th>Fabric/Glass</th>
                <td>${produto.dados.tecidoTela}</td>
            </tr>
            <tr>
                <th>Color</th>
                <td>${produto.dados.cor}</td>
            </tr>
            <tr>
                <th>Obs</th>
                <td>${produto.dados.observacao}</td>
            </tr>
        `;

        if (produto.nome === "Centro de distribuição" || produto.nome === "Doca de carregamento") {
            tabela.style.display = "none";

            const tituloEspecifico = produto.nome === "Centro de distribuição" ? "Centro de distribuição" : "Doca de carregamento";
            const tituloElemento = document.createElement("h3");

            tituloElemento.textContent = tituloEspecifico;
            container.appendChild(img);
            container.appendChild(tituloElemento);
        } 

            else {
                const tabela = document.createElement("table");
                tabela.classList.add("lista");
                tabela.innerHTML = `
                    <tr>
                        <th>Ref</th>
                        <td>${produto.dados.ref}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>${produto.dados.descricao}</td>
                    </tr>
                    <tr>
                        <th>Fabric/Glass</th>
                        <td>${produto.dados.tecidoTela}</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td>${produto.dados.cor}</td>
                    </tr>
                    <tr>
                        <th>Obs</th>
                        <td>${produto.dados.observacao}</td>
                    </tr>
                `;
                container.appendChild(img);
                container.appendChild(tabela);
        }

        divProduto.appendChild(container);
        menu.appendChild(divProduto);

    }

    function exibirProdutos() {
        produtos.forEach(produto => criarProduto(produto));
    }

    exibirProdutos();


});