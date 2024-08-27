export const Funcionalidades: React.FC = () => {
  return (
    <section className="w-full bg-background relative z-10 functionalidades-section">
      <div className="center !justify-between bg-secondary-foreground py-9">
        <div className="center !justify-between max-w-screen-2xl w-full mx-auto">
          <div className="center-col w-[40%] !justify-start">
            <h3 className="text-5xl text-gradient text-start font-poppinsSemiBold mt-4">
              Gerenciamento de Contatos
            </h3>
            <p className="text-start mt-4 font-poppinsRegular">
              Gerencie e segmente sua base de eleitores com facilidade.
              Personalize comunicações e registre interações para fortalecer o
              engajamento e construir relações duradouras.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724767049/imagem_2024-08-27_105727336_med1qk.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover"
          />
        </div>
      </div>
      <div className="center !justify-between bg-[#edf3ff] py-9">
        <div className="center !justify-between !flex-row-reverse max-w-screen-2xl w-full mx-auto">
          <div className="center-col w-[40%] !items-end">
            <h3 className="text-5xl text-gradient leading-[1.2] text-end font-poppinsSemiBold mt-4">
              Agenda do Gabinete
            </h3>
            <p className="text-end mt-4 font-poppinsRegular">
              Organize e acompanhe compromissos e atividades do gabinete em um
              calendário integrado. Coordene agendas, defina lembretes e garanta
              uma gestão eficiente do tempo.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724767106/imagem_2024-08-27_105824475_sj2xfa.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover"
          />
        </div>
      </div>
      <div className="center !justify-between bg-secondary-foreground py-9">
        <div className="center !justify-between max-w-screen-2xl w-full mx-auto">
          <div className="center-col w-[40%] ">
            <h3 className="text-5xl text-gradient text-start font-poppinsSemiBold mt-4">
              Atendimento à População
            </h3>
            <p className="text-start mt-4 font-poppinsRegular">
              Facilite o contato com a população por meio de um sistema
              centralizado. Receba e gerencie solicitações, feedback e denúncias
              de forma ágil e organizada.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724767126/imagem_2024-08-27_105844290_ixie83.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover"
          />
        </div>
      </div>
      <div className="center !justify-between bg-[#edf3ff] py-9">
        <div className="center !justify-between max-w-screen-2xl !flex-row-reverse w-full mx-auto">
          <div className="center-col w-[40%] !items-end">
            <h3 className="text-5xl text-gradient text-end font-poppinsSemiBold mt-4">
              Controle Financeiro
            </h3>
            <p className="text-end mt-4 font-poppinsRegular">
              Gerencie o orçamento de campanha com precisão. Acompanhe receitas,
              despesas e relatórios financeiros para garantir transparência e
              eficiência na administração dos recursos.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724767157/imagem_2024-08-27_105915628_mvcnq0.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
