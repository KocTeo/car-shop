import Sinon, * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import mocks from '../../mocks/car.mock';
import CarModel from '../../../models/Car.model';
import CarService from '../../../services/Car.service';
import CarController from '../../../controllers/Car.controller';
import { Request, Response } from 'express';

describe('@CarController', () => {
  const req = {} as Request;
  const res = {} as Response;
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  afterEach(() => sinon.restore())

  describe('#Create', () => {
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      sinon.stub(carService, 'create').resolves(mocks.validCar);
    });

    it('**Successfully Created', async () => {
      req.body = mocks.validCar;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;

      expect((res.json as sinon.SinonStub).calledWith(mocks.validCar)).to.be.true;
    })
  });

  describe('#Read', () => {
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      sinon.stub(carService, 'read').resolves(mocks.cars);
    });

    it('**Read All Cars', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;

      expect((res.json as sinon.SinonStub).calledWith(mocks.cars)).to.be.true;
    })
  });

  describe('#ReadOne', () => {
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      sinon.stub(carService, 'readOne').resolves(mocks.car);
    });

    it('**Read One Car', async () => {
      req.params = { id: '6322b36f98e8d7bd7e8516a8' }
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;

      expect((res.json as sinon.SinonStub).calledWith(mocks.car)).to.be.true;
    })
  });

  describe('#Update', () => {
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      sinon.stub(carService, 'update').resolves(mocks.car);
    });

    it('**Successfully Updated', async () => {
      req.body = mocks.validCar;
      req.params = { id: '6322b36f98e8d7bd7e8516a8' };

      await carController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;

      expect((res.json as sinon.SinonStub).calledWith(mocks.car)).to.be.true;
    })
  });

  describe('#Delete', () => {
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
      sinon.stub(carService, 'delete').resolves(mocks.car);
    });

    it('**Successfully Deleted', async () => {
      req.params = { id: '6322b36f98e8d7bd7e8516a8' };

      await carController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;

      expect((res.json as sinon.SinonStub).calledWith(mocks.car)).to.be.true;
    })
  });
})