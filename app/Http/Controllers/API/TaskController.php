<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // all books
    public function index($id)
    {
        $books = Task::all()->where('created_by',$id)->toArray();
        return array_reverse($books);
    }

    // add book
    public function add(Request $request)
    {

        $request->validate([
            'name' => 'required'
            //'author' => 'required',
            //'status' => 'required'
        ]);

        $book = new Task([
            'name' => $request->name,
            'created_by' => $request->created_by,
            'author' => '',
            'status' => 0
        ]);
        $book->save();


        return response()->json('The book successfully added');
    }

    // edit book
    public function edit($id)
    {
        $book = Task::find($id);
        return response()->json($book);
    }

    // update book
    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required'
           // 'author' => 'required',
           // 'status' => 'required'
        ]);

        $book = Task::find($id);
        $book->update($request->all());

        return response()->json('The book successfully updated');
    }

    public function completed($id, Request $request)
    {
        $book = Task::find($id);
        $book->update($request->all());

        return response()->json('Todo status successfully updated');
    }

    // delete book
    public function delete($id)
    {
        $book = Task::find($id);
        $book->delete();

        return response()->json('The book successfully deleted');
    }
}
