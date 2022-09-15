import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import mocks from '../../mocks/car.mock';
import { IService } from '../../../interfaces/IService';
import CarModel from '../../../models/Car.model';
import CarService from '../../../services/Car.service';

const carModel = new CarModel();
const carService = new CarService(carModel);

describe('@CarService', () => {
  describe('#Create', () => {
    afterEach(() => sinon.restore());

   describe('=Sucess', () => {
    it('**Successfully Created', async () => {
      sinon
      .stub(carModel, 'create').resolves(mocks.car)

      const createdCar = await carService.create(mocks.validCar);

      expect(createdCar).to.be.deep.equal(mocks.car);
    })
   });

   describe('=Failed', () => {
    it('Open Object', async () => {});
    it('Doors Quantity Less 2', async () => {});
    it('Seats Quantity Less 2', async () => {});
    it('Without model', async () => {});
    it('Without color', async () => {});
    it('Without year', async () => {});
    it('Without buyValue', async () => {});
    it('Without doorsQty', async () => {});
    it('Without seatsQty', async () => {});
   })
  });

  describe('#Read', () => {
    afterEach(() => sinon.restore())

    it('**Read All Cars', async () => {
      sinon
        .stub(carModel, 'read')
        .resolves(mocks.cars);

      const cars = await carModel.read();

      expect(cars).to.be.deep.equal(mocks.cars);
    })
  });

  describe('#ReadOne', () => {
    describe('=Sucess', () => {
      it('**Read One Car', async () => {
        sinon
          .stub(carModel, 'readOne')
          .resolves(mocks.car);
        
        const car = await carModel.readOne('6322b36f98e8d7bd7e8516a8');
  
        expect(car).to.be.deep.equal(mocks.car);
      });
    });

    describe('=Failed', () => {});
  })

  describe('#Update', () => {
    
  });

  describe('#Delete', () => {
    
  }); 
})