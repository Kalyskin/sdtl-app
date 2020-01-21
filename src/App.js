import React from "react";
import {
  SectionStrategy,
  StrategyTitle,
  StrategySubTitle,
  StrategyText,
  TitleLine,
  StrategyBlocks,
  StrategyBlock,
  BlockTitle,
  BlockDesc,
  BlockNumber
} from "./styles";

function App() {
  return (
    <SectionStrategy>
      <StrategyTitle>Стратегия работы</StrategyTitle>
      <TitleLine />
      <StrategySubTitle>
        Стратегия работы компании ориентирована на гибкий подход к каждому
        клиенту
      </StrategySubTitle>
      <StrategyText>Как это происходит:</StrategyText>
      <StrategyBlocks>
        <StrategyBlock className="hover">
          <BlockNumber>01</BlockNumber>
          <BlockTitle>Знакомство</BlockTitle>
          <BlockDesc>
            Один из важнейших шагов на пути к успеху, зачастую именно на стадии
            знакомства рождается понимание в необходимости реализации проекта и
            возможности сотрудничества.
          </BlockDesc>
        </StrategyBlock>
        <StrategyBlock>
          <BlockNumber>02</BlockNumber>
          <BlockTitle>Сбор требований</BlockTitle>
          <BlockDesc>
            Анализ бизнес процессов заказчика, пожеланий к реализации. Оценка
            рисков выполнения проекта. Изучение готовых решений имеющихся на
            рынке. Оценка квалификации персонала заказчика и т.д.
          </BlockDesc>
        </StrategyBlock>
        <StrategyBlock>
          <BlockNumber>03</BlockNumber>
          <BlockTitle>Составление технического задания</BlockTitle>
          <BlockDesc>
            На основе собранных требований составляется поэтапное техническое
            задание, описывающее создаваемый функционал и сроки выполнения
            каждого этапа разработки
          </BlockDesc>
        </StrategyBlock>
        <StrategyBlock>
          <BlockNumber>04</BlockNumber>
          <BlockTitle>Утверждение ТЗ с заказчиком</BlockTitle>
          <BlockDesc>
            Созданное техническое задание утверждается с заказчиком, в него
            вносятся последние коррективы и уточнения.
          </BlockDesc>
        </StrategyBlock>
        <StrategyBlock>
          <BlockNumber>05</BlockNumber>
          <BlockTitle>Разработка</BlockTitle>
          <BlockDesc>
            Согласно срокам утвержденным в техническом задании производится
            разработка и поэтапная предварительная сдача проекта. Готовые
            элементы и подсистемы передаются для тестового использования
            заказчику.
          </BlockDesc>
        </StrategyBlock>
        <StrategyBlock>
          <BlockNumber>06</BlockNumber>
          <BlockTitle>Внедрение</BlockTitle>
          <BlockDesc>
            Пройдя стадию заключительного тестирования, программное обеспечение
            внедряется в реальные бизнес процессы заказчика.
          </BlockDesc>
        </StrategyBlock>
      </StrategyBlocks>
    </SectionStrategy>
  );
}

export default App;
