+++
title = "Budoucnost strojového učení"
authors = ["Dany Chaker"]
date = 2025-10-27
insert_anchor_links = "heading"
+++

{% crt() %}
```

      `-._\ /     `~~"--.,_
     ------>|              `~~"--.,_
 jgs  _.-'/ '.____,,,,----"""~~```'

```
{% end %}

Toto je text, na který jsem dlouho čekal, než jsem ho napsal. Po dlouhých reflexích sám se sebou a sondování různých přátel a kolegy dám mu šanci stát se něčím. Chci mluvit o vizi jiná budoucnost, budoucnost, kde je můj život jednodušší při tréninku a nasazování modelů strojového učení.

Přemýšlel jsem o mnoha názvech pro tento příspěvek: _Jak si usnadnit život?_, _Strojové učení pro nás ostatní?_, _Interoperabilní a škálovatelné strojové učení_. Vyberte si ten nejlepší.

V tomto příspěvku uvedu několik problémů, které jsem pozoroval během mého roku zkušeností. Jsou to:
- [Malé, Střední a Velké. Ale ne Obří]

# Diagnóza
## 1. Malé, Střední a Velké. Ale ne Obří

V posledních několika letech získaly LLM hodně pozornosti a umělou inteligenci dostaly do centra pozornosti. Nezapírám důležitost LLM a jejich úžasných aplikací, ale budu argumentovat, že ne mnoho lidí staví tyto masivní jazykové modely v absurdně masivním měřítku.

> Nedávno bylo oznámeno OpenAI investicí [500 miliard dolarů](https://openai.com/index/five-new-stargate-sites/) do tohoto datového centra Stargate. Nedokážu si ani představit, kolik výpočetního výkonu takový systém může mít.

Co mě nejvíce zajímá, je to, čemu říkám Malé, Střední a Velké měřítko strojového učení.

Přemýšlejte o nás všech, běžných inženýrech strojového učení a datových vědcích, kteří se snaží budovat různé specializované modely. Můžeme myslet na modely pojištění, kreditní modely, různé textové a obrazové klasifikační modely, seznam je dlouhý, ale společným faktorem je, že i ty nejsložitější specializované obrazové modely nejsou ani blízko miliardám parametrů, které LLM staví.

Nasazujeme tyto modely jako batch joby, jednoduché http služby, uvnitř streamovacích aplikací nebo dokonce na hardware s nízkým výkonem jako Raspberry PI a ESP32.

Je v pořádku myslet na trénink těchto modelů v mém notebooku? Používat nějakou jednoduchou interoperabilitu k nasazení těchto modelů do jiných infrastruktur a žít svůj život bez starostí, že tyto modely jsou příliš drahé? Nebo že mě budou budit v noci?

Budu tvrdit, na základě ničeho, že většina praktiků strojového učení staví malé, střední a velké modely. Ale ne obří. Máme scikit-learn, všechny boosting knihovny, máme hodně nové práce v nových frameworkách hlubokého učení, ale na konci, zjednodušil se nám život v posledních deseti letech?

Společnost, kde pracuji, nějak vyřešila způsob minimalizace tření při picklingu a deplickingu věcí, řízení prostředí a požadavků. Ale slyšel jsem, že některé společnosti stále používají masivní monorepa modelů s plně připnutými požadavky. Batch joby stále mají mizerné pomalé výkony a jsou mnohem plýtivější, než potřebují (_načítáte celý dataset inferencí do paměti pro aplikaci starého modelu?_).

Je jasné, že připnutí požadavků není udržitelným řešením, ale pokud to neděláte, jak řídíte staré modely? Je dobré reprodukovat nějaké staré predikce pro porovnání historických stanovisek, ale pak musíme uchovávat starý kód, který musí ladit s těmito starými pickles a/nebo serializovanými váhami.

To se nezdá praktické ani pohodlné. Takže abychom řešili tyto „pod obří měřítko modely“, navrhnu nový model (ne model strojového učení) nasazení těchto rozhodovacích strojů, který bere obvyklou realitu průmyslu v úvahu: **interoperabilita modelů strojového učení**.
