import React, {Component} from 'react'
import './card.css';

export default class About extends Component {
  render() {
    return (
      <div className="col-sm-4 product" key={this.props.id}>
        <img src={this.props.gambar} className="img-responsive" alt="Image" />
        <div className="overlay">
            <p>{this.props.nama}</p>
            <button className="but" data-toggle="modal" data-target={`#${this.props.id}`}><span>Detail Product</span></button>
        </div>
        
        <div id={this.props.id} className="modal fade" role="dialog">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{this.props.nama}</h4>
                    </div>
                    <div className="modal-body" style={{marginRight:90, marginLeft:90}}>
                        <img src={this.props.gambar} className="img-responsive img-center" alt="Image" />
                        <hr/>
                        <p>{this.props.deskripsi}</p>
                        <p>Rp.{this.props.harga}/item</p>
                        <hr />
                        <label>Jumlah Makanan</label>
                        <input placeholder='Jumlah Makanan' ref='jumlahorang' type="number" />
                    </div>
                    <div className="modal-footer">
                        <input type="submmit" className="btn btn-default" data-dismiss="modal" value='Pesan Sekarang' onClick={() => this.cart(this.props.id)} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}