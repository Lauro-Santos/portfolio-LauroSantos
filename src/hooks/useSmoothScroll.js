import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Selecionar todos os elementos âncora que possuem href iniciando com '#'
    const anchors = document.querySelectorAll('a[href^="#"]');

    // Função de scroll suave
    const smoothScroll = (e) => {
      e.preventDefault();

      // Obter o elemento de destino com base no href do elemento âncora
      const target = document.querySelector(e.target.getAttribute('href'));

      // Verificar se o elemento de destino existe
      if (target) {
        // Executar o scroll suave para o elemento de destino
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    // Adicionar o event listener para cada elemento âncora
    anchors.forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    // Remover event listener quando o componente é desmontado
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);
};

export default useSmoothScroll;