import { currencyState } from '@/stores/currencyStore'

export default function Currencies() {
  const currencies = currencyState.value.currencies
  const selectedCurrency = currencyState.value.selectedCurrency
  return (
    <section>
      <article class="flex gap-2">
        {Object.keys(currencies).map((currency) => {
          return (
            <button
              onClick={() =>
              (currencyState.value = {
                ...currencyState.value,
                selectedCurrency: currency,
              })
              }
            >
              {currency}
            </button>
          )
        })}
      </article>
      <div>Contenido Principal</div>
      <div>Moneda Actual Seleccionada: {selectedCurrency}</div>
      <div>Valor: {currencies[selectedCurrency]}</div>
    </section>
  )
}
