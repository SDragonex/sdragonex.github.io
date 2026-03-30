+++
title = "Real-time machine learning v reálném čase: tipy a triky"
authors = ["Dany Chaker"]
date = 2025-12-06
insert_anchor_links = "heading"
+++

{% crt() %}
```
       .       .
            .  |  .
             \ | /    +
     *        \|/
         --==> * <==--   '
        +     /|\   .
             / | \
     .      '  |  '       *
               |
         .     '    .
```
{% end %}

Před více než rokiem jsem vyvinul prezentaci shrnující všechny praktiky, nazvané laskavě _tipy a triky_, pro údržbu a provoz modelů strojového učení v reálném čase ve firmě, kde pracuji. Nejprve to byla interní prezentace, která se změnila v prezentaci na meetupu a poté v upravený článek. Po více než jednom roce shromažďování těchto znalostí jsem se rozhodl je revidovat a zaznamenat aktualizovanou verzi tohoto textu na svých vlastních webových stránkách.

Můžete si prohlédnout zdroje pro meetup talk v portugalštině a upravený článek v portugalštině a angličtině.

{{ youtube(id="4xZUpwiiJ68") }}

**[Praktiky pro škálování operací strojového učení](https://building.nubank.com/practices-to-scale-machine-learning-operations/)**

# Reálný časový podmnožina tohoto článku

Strojové učení v reálném čase může představovat různé typy aplikací a vzhledem k široké škále možností bych rád přesně popsal, co jsem dělal, abyste mohli udělat odpovídající aproximace do jiných kontextů.

Pracuji s prevencí podvodů ve finanční instituci. To znamená, že vyvíjím automatizované rozhodovací systémy (ne nutně jen modely strojového učení), které identifikují _události_, které by se neměly stát, buď právním porušením nebo zlomyslnou akcí třetí strany. Klíčovým prvkem je, že abychom zajistili dobrý zákaznický zážitek a zabránili tragédiím, musíme identifikovat podvod v dané události v okamžiku jejího dění. V přesném „času schválení“, jinak se peníze pohybují příliš rychle, než aby se dalo dohnat později.

Nejjasnějším a přímým příkladem je transakce kreditní kartou. Představte si, že kupujete něco v podezřelém online obchodě, víte, že je podezřelý, ale cena je příliš dobrá na to, aby se to vynechalo. Koupíte věc a nikdy se k vám nedostane. Když znovu zkontrolujete obchod, zmizel. O pár dní později vás dosáhnou zprávy o tajemních nákupech a přesně víte, jak unikla vaše čísla karet.

Aplikace strojového učení na tento problém znamená, že v okamžiku, kdy kreditní karta vstupuje do našich systémů v reálném čase, musíte rozhodnout, zda ji schválit nebo ne. Výzvy udržování takových systémů začínají respektováním SLA, obvykle milisekundy nebo sekundy, a aplikací této analýzy na miliony zákazníků a potenciálně miliardy transakcí.

Můj kontext je hyperzaměřený na budování modelů a systémů, které se škálují velmi dobře na miliony zákazníků, miliardy transakcí a mohou odpovídat synchronně v milisekundách.

## Srovnání s Batch modely

Abyste zvýraznili prvky reálného času v mém kontextu, rád porovnávám s batch modely, které jsou podle mých zkušeností preferovaným prvním přístupem pro každý tým, který se snaží přijmout automatizovaná rozhodnutí.

Batch modely obvykle běží na pevném plánu, jednou denně, týdně nebo každých pár hodin. Vybírají všechny nové instance, které byly generovány v posledním časovém okně, a aplikují na ně své predikce. Jsou nasazeny v ETL/ELT systémech a obvykle spotřebovávají velmi velké tabulky. Modely v reálném čase spotřebovávají více jednoriadkových tabulek na druhé straně.

Tyto vstupní tabulky pro batch modely mohou být složeny z více jiných tabulek a upstream zdrojů, které kombinuje batch processing systém jako Spark, Pandas, Databricks, Big Query. Mezitím modely v reálném čase hledají informace v různých formách, systémy podobné feature store s předvýpočítanými daty, batch tabulky načtené do nějaké formy rychlé databáze, pravý zdroj dat ve formě mikroslužby a jejích API nebo jiných intermediárních agregacích služeb, které drží dočasná, krátkodobá data pouze pro účely budování feature pro model v reálném čase.

Vidíte, že batch modely mohou trvat až do délky časového intervalu na dokončení svých predikcí v tomto porovnání. Mají mnohem více prostoru na chyby, můžete je opakovat vícekrát a chyby nejsou přímo nebo okamžitě předávány koncovým zákazníkům.

Skutečné výzvy udržování modelů v reálném čase nežijí v modelu samotném, existují výzvy v optimalizaci python kódu modelu, ale spíše v získávání všech potřebných feature pro jeho použití.
