export default function Free() {
  return (
    <section className="center py-20 relative bg-background">
      <div className="max-w-screen-2xl center w-full bg-[#111111] rounded-lg py-10 px-7">
        <div className="text-center center !justify-between  w-full">
          <div>
            <h2 className="text-5xl title-gradient uppercase text-start leading-[1] font-poppinsExtraBold font-bold ">
              Supere todas as <br /> expectativas do cliente
            </h2>
            <p className="text-[18px] font-poppinsLight mt-4 text-background">
              Crie uma conta gratuitamente e tenha acesso a todas as
              funcionalidades.
            </p>
          </div>

          <div className="space-x-2">
            <button className="bg-primary h-[55px] whitespace-nowrap border border-solid border-primary text-center text-white font-poppinsLight py-2 px-4 rounded hover:bg-transparent hover:border-background hover:text-background transition-all">
              Começe gratuitamente
            </button>
            <button className="border border-solid border-primary bg-transparent h-[55px] whitespace-nowrap text-center text-primary font-poppinsLight py-2 px-4 rounded hover:bg-primary hover:text-background transition-all">
              Acesse um demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
