import React from "react";
import { SiThealgorithms } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai';


const Other = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend / Other</h3>
      <div className="skills__box">
        <div className="skills__group">
        <div className="skills__data">
            <i class='bx bxl-nodejs' ></i>
            <div>
              <h3 className="skills__name">NodeJs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class='bx bxl-mongodb'></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-python"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <AiOutlineConsoleSql />
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <TbBrandNextjs />
            <div>
              <h3 className="skills__name">NextJs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">ExpressJs</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-c-plus-plus"></i>
            <div>
              <h3 className="skills__name">C/C++</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <SiThealgorithms />
            <div>
              <h3 className="skills__name">DSA</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
