export default function Comprovante({ dados }) {
  return (
    <div className="comprovante">
      <h2>Comprovante</h2>
      <p><strong>Nome:</strong> {dados.nome}</p>
      <p><strong>Data:</strong> {dados.data}</p>
      <p><strong>Valor:</strong> R$ {dados.valor}</p>
      <p><strong>Referência:</strong> {dados.referencia}</p>
    </div>
  );
}