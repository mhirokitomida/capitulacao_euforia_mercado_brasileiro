# 📊 Capitulação e Euforia no Mercado Brasileiro: Estratégias de Extremos, Controles e Robustez

👉 **[🔗 Acesse o Dashboard Interativo (GitHub Pages)](https://mhirokitomida.github.io/capitulacao_euforia_mercado_brasileiro/)**

---

## 📌 Sobre o projeto

Este projeto investiga se momentos extremos do mercado brasileiro carregam informação útil para a construção de carteiras em ações.

A análise compara duas famílias principais de sinais:

- 🔻 **Capitulação**: momentos de estresse, queda ampla e deterioração relevante do mercado  
- 🚀 **Euforia**: momentos de força, proximidade de máximas e maior otimismo do mercado  

A estrutura do estudo foi desenhada para evitar uma leitura simplista baseada apenas em retorno final. Por isso, as estratégias foram avaliadas sob uma mesma base metodológica, considerando:

- 📈 **Performance**  
- 📉 **Risco e drawdown**  
- ⚖️ **Benchmarks**  
- 🎲 **Controles aleatórios**  
- 🗓️ **Controles mensais**  
- 🧪 **Inferência estatística**  
- 🔁 **Robustez e sensibilidade**  
- 🧾 **Sinais, aportes, compras e posições**  
- 🏢 **Concentração por empresa, setor, subsetor e segmento**  

A base final cobre o período de **2011-06-29 a 2025-12-30**, com:

- **8 estratégias/séries finais**
- **46 sinais consolidados**
- **276 aportes**
- **20.845 registros de compras por ticker**
- **239 tickers distintos comprados**
- **526.253 registros de posições históricas**

---

## 🎯 Objetivo

Avaliar, de forma quantitativa e auditável, se estratégias baseadas em extremos de mercado apresentam comportamento superior, inferior ou apenas diferente em relação a alternativas passivas e controles.

O projeto busca responder perguntas como:

- 📌 Comprar em momentos de **capitulação** gera melhor relação risco-retorno?  
- 📌 Comprar em momentos de **euforia** captura tendência ou aumenta o risco de entrada em preços esticados?  
- 📌 A vantagem observada sobrevive à comparação com benchmarks?  
- 📌 O resultado se mantém contra controles aleatórios e mensais?  
- 📌 A evidência é estatisticamente robusta ou apenas visualmente interessante?  
- 📌 Os resultados dependem de concentração em poucos ativos, empresas ou setores?  

---

## 🧠 Metodologia

A análise foi construída em etapas estruturadas, com foco em consistência metodológica, rastreabilidade e ausência de look-ahead.

---

### 1. Universo de mercado

O projeto parte de uma base de ações brasileiras com preços, liquidez e metadados empresariais.

Foram utilizados dados como:

- Preços ajustados por ticker  
- Volume financeiro  
- Número de negócios  
- Identificação por empresa emissora  
- Setor, subsetor e segmento  
- Indicadores contábeis trimestrais  
- Ibovespa como benchmark de renda variável  
- CDI como referência de caixa  

A chave da empresa é o **issuer_code**, enquanto o ticker funciona como ativo negociável. Isso permite escolher apenas um ticker por empresa quando necessário, reduzindo duplicidades econômicas.

---

### 2. Indicadores de amplitude

Os sinais de mercado foram construídos a partir de indicadores de amplitude, incluindo:

- Percentual de ações acima ou abaixo da média móvel de 200 dias  
- Percentual de ações em mínimas de 52 semanas  
- Percentual de ações em máximas de 52 semanas  

Esses indicadores permitem medir se o mercado está passando por deterioração ampla, recuperação, força ou excesso de otimismo.

---

### 3. Sinais de Capitulação e Euforia

Foram definidos dois blocos principais de sinais:

#### 🔻 Capitulação

Sinais associados a estresse de mercado, deterioração ampla e possíveis janelas de oportunidade após movimentos extremos de queda.

#### 🚀 Euforia

Sinais associados a força de mercado, proximidade de máximas e possível risco de comprar em ambientes excessivamente otimistas.

Após a geração dos sinais brutos, foi aplicado um **cooldown de 63 pregões**, evitando sinais muito próximos e reduzindo sobreposição excessiva entre eventos.

---

### 4. Aportes e construção das carteiras

Cada estratégia recebeu um capital total padronizado, distribuído entre os sinais válidos.

A lógica de aportes preserva comparabilidade entre as estratégias:

- Cada sinal válido gera um evento de aporte  
- O valor total destinado à estratégia é dividido pelo número de sinais  
- As compras são feitas apenas em ativos elegíveis na data do aporte  
- O caixa não investido é tratado de forma padronizada  
- As posições são acompanhadas historicamente ao longo do tempo  

A versão final consolidou **276 aportes** e **20.845 compras por ticker**.

---

### 5. Benchmarks e controles

Para evitar atribuir valor ao sinal quando o resultado poderia vir de calendário ou aleatoriedade, o projeto compara as estratégias reais contra:

- 📊 **Ibovespa**
- 💵 **CDI**
- 🎲 **Controles aleatórios**
- 🗓️ **Controles mensais**

Os controles aleatórios simulam calendários alternativos de aportes. Os controles mensais testam se uma regra simples de periodicidade poderia gerar resultado semelhante ao das estratégias condicionadas por sinais de mercado.

---

### 6. Performance

A avaliação de performance inclui:

- Curvas patrimoniais  
- Curvas indexadas  
- Retornos acumulados  
- Retornos periódicos  
- Distribuição de retornos  
- Comparação contra benchmarks  
- Comparação contra controles  

No consolidado principal, a estratégia de **Capitulação** apareceu como destaque de retorno, com **291,36%**.

---

### 7. Risco e eficiência

O projeto não interpreta retorno isoladamente. Foram avaliadas métricas como:

- Volatilidade  
- Drawdown  
- Eventos de queda  
- Sharpe  
- Sortino  
- Calmar  
- Eficiência ajustada ao risco  

Na leitura consolidada de eficiência destacada no relatório, **Capitulação** também apareceu como destaque, com métrica de **0,0474**.

---

### 8. Inferência estatística e robustez

A inferência estatística foi usada para separar resultados visualmente interessantes de evidências mais consistentes.

O projeto considera:

- Testes formais  
- Percentis empíricos  
- Bootstrap  
- Comparações contra benchmarks  
- Comparações contra controles  
- Sensibilidade de parâmetros  
- Robustez por cenários  

Na versão final do relatório, o painel destacou **0 evidências robustas/significativas** nos consolidados finais, o que exige cautela na interpretação estatística dos resultados.

Isso não invalida a leitura econômica, mas impede uma conclusão excessivamente forte sobre dominância estatística.

---

### 9. Sinais, compras, posições e concentração

Além das métricas agregadas, o projeto preserva a trilha operacional das carteiras:

- Datas dos sinais  
- Datas dos aportes  
- Valor aportado  
- Tickers comprados  
- Empresas compradas  
- Preço médio de compra  
- Número de compras  
- Posições históricas  
- Concentração por empresa  
- Concentração por setor, subsetor e segmento  

Essa camada permite entender **como** o resultado foi construído, e não apenas qual foi o resultado final.

---

## 📈 Principais Resultados

- A análise cobre o período de **2011-06-29 a 2025-12-30**
- Foram avaliadas **8 estratégias/séries finais**
- O estudo consolidou **46 sinais**
- Foram registrados **276 aportes**
- A base final possui **20.845 compras por ticker**
- Foram comprados **239 tickers distintos**
- A análise de posições históricas contém **526.253 registros**
- A estratégia de **Capitulação** teve o maior destaque de retorno consolidado, com **291,36%**
- A melhor métrica de eficiência destacada também apareceu em **Capitulação**, com **0,0474**
- A inferência consolidada indicou **0 evidências robustas/significativas**
- A leitura final exige combinar retorno, risco, controles, inferência e composição

👉 Isso sugere que:

> Capitulação apresentou melhor destaque econômico no consolidado principal,  
> mas a interpretação precisa ser feita com cautela estatística,  
> usando benchmarks, controles e composição para separar sinal real de efeito amostral.

---

## 📊 Visualizações

O projeto inclui um relatório HTML interativo com:

- 📈 Curvas patrimoniais  
- 📊 Curvas indexadas  
- 📉 Drawdowns  
- 📦 Distribuição de retornos  
- ⚖️ Comparação contra benchmarks  
- 🎲 Comparação contra controles aleatórios  
- 🗓️ Comparação contra controles mensais  
- 🧪 Gráficos de inferência estatística  
- 🔁 Gráficos de robustez e sensibilidade  
- 🧾 Timeline de sinais e aportes  
- 💰 Valor aportado por estratégia  
- 🏢 Concentração por empresa  
- 🧭 Concentração por setor, subsetor e segmento  
- 🔥 Heatmaps de compras e concentração  
- 📋 Tabelas interativas com busca, ordenação e paginação  

---

## 🌐 Visualização do projeto

👉 https://mhirokitomida.github.io/capitulacao_euforia_mercado_brasileiro/

---

## ⚠️ Observações importantes

- A análise não constitui recomendação de investimento  
- Os resultados dependem do período analisado, dos critérios de elegibilidade e da metodologia de sinais  
- Estratégias baseadas em eventos extremos podem ser sensíveis a poucos episódios históricos  
- A comparação com benchmarks não é suficiente para concluir robustez  
- Controles aleatórios e mensais são essenciais para avaliar se o sinal agrega valor além do calendário  
- A ausência de evidência estatística robusta exige cautela na interpretação  
- Resultados econômicos e significância estatística não são a mesma coisa  
- A composição das carteiras deve ser analisada para identificar concentração involuntária  
- O projeto busca evidência empírica comparativa, não causalidade definitiva  

---

## 🧠 Principais Aprendizados

- A comparação entre **Capitulação** e **Euforia** não deve ser feita apenas por retorno acumulado  
- Retorno, risco, drawdown, Sharpe, Sortino e Calmar precisam ser lidos em conjunto  
- Benchmarks, controles aleatórios e controles mensais ajudam a separar sinal de calendário  
- Capitulação apareceu como destaque econômico consolidado na versão final do relatório  
- A inferência estatística pede cautela, com **0 evidências robustas/significativas** nos consolidados finais  
- A trilha entre sinal, aporte, compra e posição melhora a auditabilidade do backtest  
- A análise de concentração por empresa e setor é essencial para entender a origem econômica dos resultados  
- Estratégias de extremos podem gerar resultados interessantes, mas exigem validação contra controles  
- O projeto mostra a importância de transformar uma hipótese intuitiva em um teste quantitativo estruturado  

---

## 🏁 Conclusão

O estudo reforça uma ideia central:

> Estratégias de extremos de mercado não devem ser avaliadas apenas pelo retorno final, mas pela combinação entre desempenho, risco, controles, inferência e composição.

A estratégia de **Capitulação** apareceu como destaque econômico no consolidado principal, com **291,36%** de retorno e melhor métrica de eficiência destacada, em **0,0474**. Isso sugere que comprar momentos de estresse extremo pode ter produzido uma trajetória relevante dentro do período analisado.

Ao mesmo tempo, a leitura estatística exige cautela. O painel final destacou **0 evidências robustas/significativas**, o que impede transformar o resultado econômico em uma conclusão definitiva de dominância estatística.

A principal contribuição do projeto é mostrar que a pergunta correta não é apenas:

> “Capitulação ou Euforia rendeu mais?”

Mas sim:

> “Esse resultado sobrevive à análise de risco, benchmarks, controles, inferência e composição?”

Em termos práticos, o relatório transforma uma hipótese intuitiva sobre medo e euforia em uma avaliação quantitativa, auditável e interpretável por camadas.
