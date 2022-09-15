import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import mocks from '../../mocks/car.mock';
import { Model } from 'mongoose';
import CarModel from '../../../models/Car.model';

const carModel = new CarModel();

describe('@CarModel', () => {
  afterEach(() => {
    sinon.restore();
  })

  describe('#Create', () => {
      it('**Successfully Created', async () => {
        sinon
          .stub(Model, 'create')
          .resolves(mocks.validCar);
        const createdCar = await carModel.create(mocks.validCar);
  
        expect(createdCar).to.be.deep.equal(mocks.validCar);
      });
    });

  describe('#Read', () => {
    it('**Read All Cars', async () => {
      sinon
        .stub(Model, 'find')
        .resolves(mocks.cars);

      const cars = await carModel.read();

      expect(cars).to.be.deep.equal(mocks.cars);
    })
  });

  describe('#ReadOne', () => {
      it('**Read One Car', async () => {
        sinon
          .stub(Model, 'findOne')
          .resolves(mocks.car);
        
        const car = await carModel.readOne('6322b36f98e8d7bd7e8516a8');
  
        expect(car).to.be.deep.equal(mocks.car);
      });
  });

  describe('#Update', () => {
    it('**Successfully Updated', async () => {
      sinon
        .stub(Model, 'findOneAndUpdate')
        .resolves(mocks.car);

      const updatedCar = await carModel.update(mocks.car._id, mocks.validCar);

      expect(updatedCar).to.be.deep.equal(mocks.car);
    })
  });

  describe('#Delete', () => {
    it('**Successfully Deleted', async () => {
      sinon
        .stub(Model, 'findOneAndDelete')
        .resolves(mocks.validCar);
      
      const deletedCar = await carModel.delete('6322b36f98e8d7bd7e8516a8');

      expect(deletedCar).to.be.deep.equal(mocks.validCar);
    })
  });
});