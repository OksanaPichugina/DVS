import React from "react";

export default function AboutUs() {
  return (
    <div className="section">
      <div className="section__name">
        <div className="section__name__wrapper">
          <p className="section__name__text">Немного о нас</p>
        </div>
      </div>
      <div className="section__content">
        <p className="section__content__text">
          Мы гордимся высоким качеством наших работ и стремимся к тому, чтобы
          каждый клиент был доволен результатом. Наша команда опытных
          специалистов обладает глубокими знаниями и навыками в своей области,
          что позволяет нам выполнять любые задачи с высокой скоростью и
          профессионализмом.
        </p>
        <div className="section__content__advantages">
          <div className="section__content__advantages__block">
            <div className="section__content__advantages__block__underline">
              <p className="section__content__advantages__block__text_big">
                10 лет
              </p>
            </div>
            <p className="section__content__advantages__block__text">
              работаем в сфере
            </p>
          </div>
          <div className="section__content__advantages__block">
            <div className="section__content__advantages__block__underline">
              <p className="section__content__advantages__block__text_big">
                60+
              </p>
            </div>
            <p className="section__content__advantages__block__text">
              реализованных оъектов
            </p>
          </div>
          <div className="section__content__advantages__block">
            <div className="section__content__advantages__block__underline">
              <p className="section__content__advantages__block__text_big">
                &&
              </p>
            </div>
            <p className="section__content__advantages__block__text">
              профессиональная команда
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
